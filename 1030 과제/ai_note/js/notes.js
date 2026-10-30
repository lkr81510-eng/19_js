// ===== AI 노트 (localStorage 사용) =====

// localStorage에 저장할 때 쓰는 이름표(key)
const STORAGE_KEY = "aiNotes";

// 화면 요소 가져오기
const form = document.getElementById("note-form");
const typeSelect = document.getElementById("type");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const memoInput = document.getElementById("memo");
const titleLabel = document.getElementById("title-label");
const contentLabel = document.getElementById("content-label");
const messageEl = document.getElementById("message");
const listEl = document.getElementById("note-list");
const filtersEl = document.getElementById("filters");

// 저장된 노트 불러오기 (없으면 빈 배열)
// localStorage에는 문자열만 저장되므로 JSON.parse로 배열로 되돌립니다.
let notes = loadNotes();
let editingId = null;       // 수정 중인 노트의 id (없으면 null)
let currentFilter = "전체"; // 현재 선택된 필터

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// 오늘 날짜를 "2026-10-30" 형태로 만들기
function today() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + mm + "-" + dd;
}

// 종류에 따라 입력창 라벨/안내 문구를 바꿉니다.
function updateLabels() {
  if (typeSelect.value === "용어") {
    titleLabel.textContent = "용어 *";
    contentLabel.textContent = "내 말로 정리한 설명 *";
    titleInput.placeholder = "예: 트랜스포머";
    contentInput.placeholder = "내 말로 쉽게 설명해 보세요";
  } else {
    titleLabel.textContent = "용도 *";
    contentLabel.textContent = "프롬프트 내용 *";
    titleInput.placeholder = "예: 글 요약하기";
    contentInput.placeholder = "AI에게 입력할 프롬프트를 적어 주세요";
  }
}
typeSelect.addEventListener("change", updateLabels);
updateLabels();

// ----- 추가 -----
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  // 제목이나 내용이 비어 있으면 안내
  if (title === "" || content === "") {
    messageEl.textContent = "제목(용어/용도)과 내용을 모두 입력해 주세요.";
    return;
  }
  messageEl.textContent = "";

  notes.unshift({            // unshift: 맨 앞에 넣어 최신 노트가 위에 오게 함
    id: Date.now(),
    type: typeSelect.value,
    title: title,
    content: content,
    memo: memoInput.value.trim(),
    date: today(),
  });
  saveNotes();
  form.reset();
  updateLabels();
  render();
});

// ----- 필터 버튼 -----
filtersEl.addEventListener("click", function (event) {
  const btn = event.target.closest(".filter");
  if (!btn) return;
  currentFilter = btn.dataset.filter;
  // 선택된 버튼만 active 표시
  filtersEl.querySelectorAll(".filter").forEach(function (b) {
    b.classList.toggle("active", b === btn);
  });
  editingId = null;
  render();
});

// ----- 목록 그리기 -----
function render() {
  listEl.innerHTML = "";

  // 필터에 맞는 노트만 고르기
  const visible = notes.filter(function (n) {
    return currentFilter === "전체" || n.type === currentFilter;
  });

  if (visible.length === 0) {
    listEl.innerHTML = '<p class="hint">표시할 노트가 없습니다.</p>';
    return;
  }

  visible.forEach(function (note) {
    const card = document.createElement("article");
    card.className = "card note";
    if (note.id === editingId) {
      renderEditMode(card, note);
    } else {
      renderViewMode(card, note);
    }
    listEl.appendChild(card);
  });
}

// 보기 모드
function renderViewMode(card, note) {
  const isPrompt = note.type === "프롬프트";

  const badge = el("span", "badge" + (isPrompt ? " prompt" : ""), note.type);
  const title = el("h3", "", note.title);
  const content = el("p", "content", note.content);
  card.append(badge, title, content);

  if (note.memo) card.append(el("p", "memo", "📝 " + note.memo));
  card.append(el("p", "date", note.date));

  const actions = el("div", "actions", "");

  // 프롬프트에만 복사 버튼
  if (isPrompt) {
    const copyBtn = button("복사", "btn small green", async function () {
      try {
        // 클립보드에 복사 (https 또는 localhost에서 동작)
        await navigator.clipboard.writeText(note.content);
        copyBtn.textContent = "복사됨 ✓";
      } catch (e) {
        copyBtn.textContent = "복사 실패";
      }
      setTimeout(function () { copyBtn.textContent = "복사"; }, 1500);
    });
    actions.append(copyBtn);
  }

  actions.append(
    button("수정", "btn small", function () {
      editingId = note.id;
      render();
    }),
    button("삭제", "btn small red", function () {
      if (confirm("이 노트를 삭제할까요?")) {
        notes = notes.filter(function (n) { return n.id !== note.id; });
        saveNotes();
        render();
      }
    })
  );
  card.append(actions);
}

// 수정 모드
function renderEditMode(card, note) {
  card.append(el("span", "badge" + (note.type === "프롬프트" ? " prompt" : ""), note.type));

  const t = document.createElement("input");
  t.type = "text";
  t.value = note.title;
  const c = document.createElement("textarea");
  c.rows = 4;
  c.value = note.content;
  const m = document.createElement("input");
  m.type = "text";
  m.value = note.memo;
  const msg = el("p", "message", "");

  card.append(
    el("label", "", note.type === "용어" ? "용어 *" : "용도 *"), t,
    el("label", "", note.type === "용어" ? "내 말로 정리한 설명 *" : "프롬프트 내용 *"), c,
    el("label", "", "메모"), m,
    msg
  );

  const actions = el("div", "actions", "");
  actions.append(
    button("저장", "btn small", function () {
      if (t.value.trim() === "" || c.value.trim() === "") {
        msg.textContent = "제목과 내용을 모두 입력해 주세요.";
        return;
      }
      note.title = t.value.trim();
      note.content = c.value.trim();
      note.memo = m.value.trim();
      editingId = null;
      saveNotes();
      render();
    }),
    button("취소", "btn small gray", function () {
      editingId = null; // 변경 없이 되돌리기
      render();
    })
  );
  card.append(actions);
}

// ----- 도우미 함수 -----
// 태그를 만들고 글자를 넣습니다. (textContent라서 입력한 HTML이 실행되지 않아 안전)
function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  e.textContent = text;
  return e;
}

function button(label, className, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = label;
  b.className = className;
  b.addEventListener("click", onClick);
  return b;
}

// 처음 한 번 그리기
render();
