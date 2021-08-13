import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Notice me, senpai!',
});

refs = {
  input: document.querySelector('.js-input'),
};

refs.input.addEventListener('input', onSuccess);

function onSuccess(e) {}
