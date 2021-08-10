// другой файлик  ./api-service.js
const BASE_URL = "https://pokeapi.co/api/v2";

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then((response) =>
    response.json()
  );
}

// export default { fetchPokemon };
// ================================
// файлик ./get-refs.js

export default function getRefs() {
  return {
    cardContainer: document.querySelector("js-container"),
    searchForm: document.querySelector("js-form"),
  };
}
// =================================

import API from "./api-service";
import getRefs from "./get-refs";

const refs = getRefs();

refs.searchForm.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.element.query.value;

  API.fetchPocemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  requestAnimationFrame.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Упс, что-то пошло не так, мы не нашли покемона!");
}
//  ======================================================= //

fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then((r) => r.json())
  .then(console.log());
