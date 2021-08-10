import NewsApiService from "news-api.js";

refs = {
  searchForm: document.querySelector("js-form"),
  articleContainer: document.querySelector("js-container"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(e) {
  e.preventDefault();

  if (newsApiService.query === "") {
    return alert("Введи что-то нормальное!");
  }

  newsApiService.query = e.currentTarget.element.query.value;
  newsApiService.fetchArticles();
  newsApiService.resetPage();
}

function onLoadMore() {
  newsApiService.fetchArticles();
}
