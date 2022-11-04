function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body');
const colorValue = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');


const changeBgColor = () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorValue.innerHTML = randomColor;
}


changeColorBtn.addEventListener('click', changeBgColor)