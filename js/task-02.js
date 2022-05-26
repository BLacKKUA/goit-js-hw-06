const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector('#ingredients');
const array = ingredients.map(element => {
  const newliEl = document.createElement('li');
  newliEl.classList.add('item')
  newliEl.textContent = element;
  return newliEl
})

ulRef.append(...array)