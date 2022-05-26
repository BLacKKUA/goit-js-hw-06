function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeBgColorRef: document.querySelector('.change-color'),
  spanCodeBgColorRef: document.querySelector('.color')
}

refs.buttonChangeBgColorRef.addEventListener('click', changeBgColor)

function changeBgColor() {
  const codeColor = getRandomHexColor()
  refs.spanCodeBgColorRef.textContent = codeColor;
  document.body.style.backgroundColor = codeColor;
}