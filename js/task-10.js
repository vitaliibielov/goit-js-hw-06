function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValueEl = document.querySelector('#controls > input')
const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const boxesList = document.querySelector('#boxes');
console.log(inputValueEl)


let qnt = 0;
let defSize = 30;


const qntBoxes = event => qnt = event.target.value >= 1 && event.target.value <= 100 ? +event.target.value : 0;
inputValueEl.addEventListener('input', qntBoxes)


const createBoxes = () => {

  // const qntBoxes = event => event.target.value === NaN ? alert('Введіть число') : qnt = +event.target.value;
  // console.log(qnt)

  // inputValueEl.addEventListener('input', qntBoxes)
  
  const divArr = [];

  for (let i = 0; i < qnt; i++) {

    // const box = document.createElement('div')
    
    // box.style.width = `${defSize}px`;
    // box.style.height = `${defSize}px`;
    // box.style.backgroundColor = getRandomHexColor();
    // boxesList.append(box);

    // const box = `<div style="width: ${defSize}px; heigth: ${defSize}px; background-color: ${getRandomHexColor()};"></div>`
    const box = `<div width: ${defSize}px; heigth: ${defSize}px; background-color: ${getRandomHexColor()}></div>`
    divArr.push(box)
    defSize += 10;
  }
  console.log(divArr)
  boxesList.insertAdjacentHTML('beforeend', divArr.join(''));

}

const removeBoxes = () => {
  // const boxes = document.querySelectorAll('#boxes > div');
  // boxes.forEach(box => box.remove())
  // console.log(boxes.innerHTML)
  boxesList.innerHTML = '';
  defSize = 30;
}

createBtn.addEventListener('click', createBoxes);
deleteBtn.addEventListener('click', removeBoxes);