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
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// const h1 = document.querySelector('h1');

/////PAGE NAVIGATIONN
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('link');

    const id = this.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

///EVENT DELIGATION

//1.ADD EVENT LISTENER TO COMMOM PARENT ELEMENT
//2.DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //matching the target elements inside parent element

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//TABBED COMPOMENET

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //REMOVINNG ACTIVE CLASSES

  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  //ACTIVE TAB
  //ACTIVATING CONTENT AREA

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////DOM TRAVERSING

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

// const message = document.createElement('div');

// message.classList.add('cookie-message');

// message.innerHTML =
//   'we use cookies for improved functionality and analytcs. <button class= "btn btn--close--cookie">Got it!</button>';

// header.prepend(message);

// message.style.backgroundColor = '#37383d';

// message.style.width = '120%';
// header.append(message);
// header.append(message.cloneNode(true));
//header.after(message);

//.insertAdjacentHTML

//deleting elements

// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

//Dom mainpulation of CSS

// console.log(message.style.color);

// console.log(getComputedStyle(message).color);

// message.style.height =

// console.log(getComputedStyle(message).height);

// console.log();

// message.style.height =
// Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

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

// const alertH1 = function (e) {
//   alert('addEventListener: yep you are hovering over heading');
// };

// h1.addEventListener('mouseenter', alertH1);

// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: yep you are hovering over heading');
// // };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(`${randomColor(0, 255)}`);

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();

//   ///STOP PROPAGATION
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));

// console.log(h1.childNodes);

// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';

// h1.lastElementChild.style.color = 'orangered';

// //GOING UPWARDS: PARENTS

// console.log(h1.parentNode);

// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// console.log(h1.previousElementSibling);

// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);

// console.log(h1.nextSibling);
