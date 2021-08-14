// import { alert } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// import debounce from '../node_modules/lodash';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';

// alert({
//   type: 'arror',
//   text: 'success!',
// });

refs.input.addEventListener('input', debounce(handleInput, 2000));
