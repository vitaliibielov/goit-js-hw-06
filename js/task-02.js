const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrList = document.querySelector('#ingredients');

// ingredients.forEach(ingredient => {
//   const ingrEl = document.createElement('li');
//   ingrEl.textContent = ingredient;
//   ingrEl.classList.add('item');
//   ingrList.append(ingrEl);
// })





const liEls = ingredients.map(ingredient => {
  const ingrEl = document.createElement('li');
  ingrEl.textContent = ingredient;
  ingrEl.classList.add('item');
  return ingrEl;
})

ingrList.append(...liEls);