'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tabk-container');

const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden') {
    closeModal();
  }
});

//////////////
//////////////

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

//MENU FADE ANIMATIONS

const handleOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleOver.bind(0.5));

nav.addEventListener('mouseout', handleOver.bind(1));

//STICKY NAVIGATION
/*

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

*/
//Intersection observer API
/*
const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {});
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);

observer.observe(section1);
*/

const navHeight = nav.getBoundingClientRect().height;

// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//////REVEALING ELEMENTS ON SCROLL SECTIONS

const allsections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allsections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//LAZY LOADING

const imgTarget = document.querySelectorAll('img[data-src]');

// console.log(imgTarget);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //replacing src with data src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '0px',
});

imgTarget.forEach(img => imgObserver.observe(img));

//  SLIDER

const slider = function () {
  const slides = document.querySelectorAll('.slide');

  const btnLft = document.querySelector('.slider__btn--left');

  const btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');

  // console.log(dotContainer);

  //FUNCTIONS
  const createDots = function () {
    slides.forEach(function (slide, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide = "${i}" ></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.re      move('dots__dot--active');

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  let currentSlide = 0;

  // console.log(slides.length);

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    currentSlide === slides.length - 1 ? (currentSlide = 0) : currentSlide++;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = function () {
    currentSlide === 0 ? (currentSlide = slides.length - 1) : currentSlide--;

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    createDots();
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  init();
  //EVENT HANDLER

  btnRight.addEventListener('click', nextSlide);

  btnLft.addEventListener('click', prevSlide);

  //SLIDER USING KEYBOARD BUTTON

  document.addEventListener('keydown', function (e) {
    console.log(e);

    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot') {
      const { slide } = e.target.dataset;
      // console.log(e.target.dataset);
      goToSlide(slide);

      activateDot(slide);
    }
  });
};

slider();
////DOM TRAVERSING

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsoptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsoptions);

// observer.observe(section1);

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
// header.append(message.cloneNode(true);
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

console.log(logo.getAttribute('stylist'); //works

console.log(logo.src);

console.log(logo.getAttribute('src');

const link = document.querySelector('.nav__link--btn');

console.log(link.href);

console.log(link.getAttribute('href');

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

// console.log(h1.querySelectorAll('.highlight');

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
