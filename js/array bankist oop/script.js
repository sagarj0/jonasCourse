'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////
//////////////

/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const allSections = document.querySelectorAll('section');

console.log(allSections);

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);
*/

/////CREATING AND INSERTING ELEMENTS
// message.textContent = 'we use cookies for improved functionality and analytcs';

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  'we use cookies for improved functionality and analytcs. <button class= "btn btn--close--cookie">Got it!</button>';

header.prepend(message);

message.style.backgroundColor = '#37383d';

message.style.width = '120%';
// header.append(message);
// header.append(message.cloneNode(true));
//header.after(message);

//.insertAdjacentHTML

//deleting elements

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Dom mainpulation of CSS

// console.log(message.style.color);

// console.log(getComputedStyle(message).color);

// message.style.height =

console.log(getComputedStyle(message).height);

// console.log();

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATTRIBUTES
/*
const logo = document.querySelector('.nav__logo');

console.log(logo.src);

console.log(logo.stylist); //undefined

console.log(logo.getAttribute('stylist')); //works

console.log(logo.src);

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);

console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

logo.classList.add('c', 's');
logo.classList.remove('c', 's');
logo.classList.toggle('c');
logo.classList.contains('c');
*/
// logo.className = 'sagar'//this will overwrite everyclasslist of logo

//implementing smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1cords = section1.getBoundingClientRect();

  console.log(s1cords);

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width',

    document.documentElement.clientHeight,

    document.documentElement.clientWidth
  );

  //SCROLLING

  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // smooth scrolling
  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
