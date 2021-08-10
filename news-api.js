const KEY = "75e6d13ff6fd46bfbb1d82a5e48ed5ff";
const BASE_URL = "https://newsapi.org/v2";

export default class NewsApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  feachArticles() {
    const options = {
      headers: {
        Authorization: KEY,
      },
    };

    const url = `${BASE_URL}/everything?q=${searchQuery}&language=en&pageSize=5&page=${this.page}`;

    fetch(url, options)
      .then((response) => response.json)
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
