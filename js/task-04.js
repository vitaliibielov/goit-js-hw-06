const counterEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decreaseValue = () => {
    counterEl.textContent = +counterEl.textContent - 1;

    // counterValue -= 1;
    // counterEl.textContent = counterValue;
}

const increaseValue = () => {
    counterEl.textContent = +counterEl.textContent + 1;

    // counterValue += 1;
    // counterEl.textContent = counterValue;
}


decrementBtn.addEventListener('click', decreaseValue);
incrementBtn.addEventListener('click', increaseValue);
