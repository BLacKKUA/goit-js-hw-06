let counterValue = document.querySelector('#value');
const decrementButtonRef = document.querySelector('[data-action="decrement"]')
const incrementButtonRef = document.querySelector('[data-action="increment"]')

decrementButtonRef.addEventListener('click', targetButtonDecrement)
incrementButtonRef.addEventListener('click', targetButtonIncrement)

let counter = document.querySelector('#value').textContent;
function targetButtonDecrement() {
   // counterValue.textContent--;

   counter--;
   counterValue.textContent = counter;
}
function targetButtonIncrement() {
   // counterValue.textContent++;

      counter++;
   counterValue.textContent = counter;
}