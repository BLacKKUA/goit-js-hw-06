function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxesRefs: document.querySelector('#boxes'),
  controlInputRefs: document.querySelector('#controls > input'),
  controlCreateRefs: document.querySelector('#controls [data-create]'),
  controlDestroyRefs: document.querySelector('#controls [data-destroy]')
}

refs.controlCreateRefs.addEventListener('click', inputChecker)
refs.controlDestroyRefs.addEventListener('click', deleteBoxes)


// і тут питання, чому якщо в inputChecker в if
// замість 100 я поставлю refs.controlInputRefs.max
// і не працює (тіки працює якщо 1 елемент)
// що value що max обидва string типи

// console.log(typeof refs.controlInputRefs.max);
// console.log(typeof refs.controlInputRefs.value);

function inputChecker() {
  if(refs.controlInputRefs.value <= 100){
      const valueInput = refs.controlInputRefs.value
      createBoxes(valueInput)
  } else {
    alert('Не більше 100 елементів')
    }
}

let size = {
  width: 30,
  height: 30,
}
function createBoxes(amount) {
  for (let i = 1; amount >= i; i++){
    let my_div = document.createElement('div')
    my_div.setAttribute('id', 'boxes')
    my_div.style.width = size.width + 'px';
    my_div.style.height = size.height + 'px';
    my_div.style.backgroundColor = getRandomHexColor()
    refs.boxesRefs.append(my_div)
    size.width += 10;
    size.height += 10;
  }
}

function deleteBoxes() {
  refs.boxesRefs.innerHTML = '';
  size.width = 30;
  size.height = 30;
}