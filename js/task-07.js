const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const changeFontOfText = event => {
    textEl.style.fontSize = `${event.target.value}px`;
}


inputEl.addEventListener('input', changeFontOfText)