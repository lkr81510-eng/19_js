// ===== 한국어 위키백과 검색 (API 키 불필요) =====

const API = "https://ko.wikipedia.org/w/api.php";

const searchForm = document.getElementById("search-form");
const queryInput = document.getElementById("query");
const messageEl = document.getElementById("search-message");
const resultsEl = document.getElementById("results");
const detailEl = document.getElementById("detail");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  search(queryInput.value.trim());
});

// 주소 뒤에 붙일 "이름=값&이름=값" 문자열을 만들어 줍니다.
// URLSearchParams가 한글/특수문자를 알아서 변환해 줍니다.
function buildUrl(params) {
  // origin=* : 브라우저에서 다른 사이트(위키백과) 요청을 허용하기 위한 값 (CORS)
  params.format = "json";
  params.origin = "*";
  return API + "?" + new URLSearchParams(params).toString();
}

// 검색 결과의 snippet에는 <span> 같은 HTML 태그가 섞여 있어 글자만 남깁니다.
function stripTags(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent;
}

// ----- 1) 검색 -----
async function search(keyword) {
  detailEl.innerHTML = "";
  resultsEl.innerHTML = "";

  if (keyword === "") {
    messageEl.textContent = "검색어를 입력해 주세요.";
    return;
  }
  messageEl.textContent = "검색 중...";

  const url = buildUrl({
    action: "query",
    list: "search",
    srsearch: keyword,
    srlimit: 10,
  });

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();

    const items = data.query.search; // 검색 결과 배열
    if (!items || items.length === 0) {
      messageEl.textContent = "검색 결과가 없습니다.";
      return;
    }

    messageEl.textContent = "";
    items.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "card clickable result";

      const h3 = document.createElement("h3");
      h3.textContent = item.title;
      const p = document.createElement("p");
      p.textContent = stripTags(item.snippet) + "…";

      card.append(h3, p);
      // 카드를 누르면 상세 내용을 불러옵니다.
      card.addEventListener("click", function () {
        showDetail(item.pageid);
      });
      resultsEl.appendChild(card);
    });
  } catch (error) {
    messageEl.textContent = "검색에 실패했습니다. 잠시 후 다시 시도해 주세요.";
    console.error(error);
  }
}

// ----- 2) 상세 보기 (요약, 대표 이미지, 원문 링크) -----
async function showDetail(pageid) {
  detailEl.innerHTML = '<p class="hint">불러오는 중...</p>';
  detailEl.scrollIntoView({ behavior: "smooth" });

  const url = buildUrl({
    action: "query",
    prop: "extracts|pageimages|info",
    exintro: 1,        // 문서 맨 앞 소개 부분만
    explaintext: 1,    // HTML 없이 글자만
    piprop: "thumbnail",
    pithumbsize: 500,  // 대표 이미지 너비
    inprop: "url",     // 원문 주소
    pageids: pageid,
  });

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    const page = data.query.pages[pageid];

    detailEl.innerHTML = "";
    const card = document.createElement("article");
    card.className = "card detail";

    const h2 = document.createElement("h2");
    h2.textContent = page.title;
    card.append(h2);

    // 이미지는 있는 문서에만 표시 (없으면 건너뜀)
    if (page.thumbnail && page.thumbnail.source) {
      const img = document.createElement("img");
      img.src = page.thumbnail.source;
      img.alt = page.title + " 대표 이미지";
      card.append(img);
    }

    const extract = document.createElement("p");
    extract.className = "extract";
    extract.textContent = page.extract || "요약 정보가 없습니다.";
    card.append(extract);

    const link = document.createElement("a");
    link.href = page.fullurl;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "위키백과 원문 보기 →";
    card.append(link);

    detailEl.appendChild(card);
  } catch (error) {
    detailEl.innerHTML = '<p class="message">상세 내용을 불러오지 못했습니다.</p>';
    console.error(error);
  }
}
