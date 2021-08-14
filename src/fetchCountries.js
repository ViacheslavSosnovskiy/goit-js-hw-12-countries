import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

alert({
  type: 'success',
  text: 'success!',
});

refs = {
  input: document.getElementById('js-input'),
  container: document.querySelector('.container'),
};

refs.input.addEventListener('input', handleInput);

function handleInput(e) {
  const name = e.target.value;
  if (name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        return response.json;
      })
      .then(countries => {
        const countiesHtml = countries.map(country => `<h4>${country.name}</h4>`).join('');

        // alert({
        //   type: 'success',
        //   text: 'Notice me, senpai!',
        // });

        refs.container.insertAdjecentHTML('beforeend', countiesHtml);
      })
      .catch(console.error);
  }
}
