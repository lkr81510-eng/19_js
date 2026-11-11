#!/usr/bin/env bash
# GitHub Actions가 EC2에 접속해 실행하는 배포 스크립트
set -euo pipefail

APP_DIR="$HOME/fastapi-stock-19"
SERVICE="fastapi-stock-19"
PORT=8000

export PATH="$HOME/.local/bin:$PATH"

if ! command -v uv >/dev/null 2>&1; then
  curl -LsSf https://astral.sh/uv/install.sh | sh
fi

cd "$APP_DIR"
uv sync --frozen --no-dev --no-install-project

sudo tee "/etc/systemd/system/$SERVICE.service" >/dev/null <<EOF
[Unit]
Description=FastAPI stock API
After=network-online.target
Wants=network-online.target

[Service]
User=$(id -un)
WorkingDirectory=$APP_DIR
ExecStart=$APP_DIR/.venv/bin/uvicorn main:app --host 0.0.0.0 --port $PORT
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable "$SERVICE"
sudo systemctl restart "$SERVICE"

for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null "http://127.0.0.1:$PORT/docs"; then
    echo "Deploy succeeded: $SERVICE is responding on port $PORT"
    exit 0
  fi
  sleep 1
done

echo "Deploy failed: $SERVICE did not respond on port $PORT" >&2
sudo systemctl status "$SERVICE" --no-pager || true
sudo journalctl -u "$SERVICE" -n 50 --no-pager || true
exit 1
