const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

const nameChanger = event => nameEl.textContent = event.target.value === '' ? 'Anonymous' : event.target.value;


inputEl.addEventListener('input', nameChanger);