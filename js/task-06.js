const inputRef = document.querySelector('#validation-input')
const lengthInputRef = inputRef.getAttribute('data-length')
console.log(inputRef);
console.log(lengthInputRef);


inputRef.addEventListener('blur', validator)

function validator() {
   if (inputRef.value.length >= lengthInputRef) {
      inputRef.classList.add('valid')
      inputRef.classList.remove('invalid')
   } else {
      inputRef.classList.add('invalid')
      inputRef.classList.remove('valid')
   }
}