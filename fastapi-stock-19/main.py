from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://fastapi-stock-react-19-two.vercel.app"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/")
def read_home():
    return {"hello World"}


@app.get("/samsung")
def read_samsung():
    # 005930.KS : 야후 파이낸스의 삼성전자 종목 코드
    history = yf.Ticker("005930.KS").history(period="1mo")

    if history.empty:
        raise HTTPException(status_code=502, detail="주식 데이터를 가져오지 못했습니다.")

    prices = [
        {
            "date": date.strftime("%Y-%m-%d"),
            "open": float(row["Open"]),
            "high": float(row["High"]),
            "low": float(row["Low"]),
            "close": float(row["Close"]),
            "volume": int(row["Volume"]),
        }
        for date, row in history.iterrows()
    ]

    return {"name": "삼성전자", "code": "005930", "prices": prices}
