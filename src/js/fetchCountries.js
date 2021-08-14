function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export default fetchCountries;
