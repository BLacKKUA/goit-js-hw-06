const ulCategory = document.querySelectorAll('li.item');
console.log(`Number of categories: ${ulCategory.length}`)

const test = document.querySelectorAll('li.item');
test.forEach(element => {
   const h2El = element.querySelector('h2').textContent
   const ulEl = element.querySelectorAll('li')
   console.log(`Category: ${h2El}`)
   console.log(`Elements: ${ulEl.length}`)
})