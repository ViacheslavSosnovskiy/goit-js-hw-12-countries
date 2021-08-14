import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(fetchCountries, 2000));
