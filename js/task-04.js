let counterValue = document.querySelector('#value');
const decrementButtonRef = document.querySelector('[data-action="decrement"]')
const incrementButtonRef = document.querySelector('[data-action="increment"]')

decrementButtonRef.addEventListener('click', targetButtonDecrement)
incrementButtonRef.addEventListener('click', targetButtonIncrement)

function targetButtonDecrement() {
   counterValue.textContent--;
}
function targetButtonIncrement() {
   counterValue.textContent++;
}