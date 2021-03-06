const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery')
// const array = images.map(element => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   li.classList.add('flex')
//   img.src = element.url;
//   img.alt = element.alt;
//   img.width = 425;
//   li.append(img)
//   return li
// })
// // console.log(array)
// galleryEl.append(...array)

const element = images.map(({ url, alt }) =>
  `<li class="flex"><img class="imageStyle" src='${url}' alt='${alt}'></li>`).join('')
console.log(element);

let tests = galleryEl.insertAdjacentHTML('afterbegin', element)
console.log(tests);