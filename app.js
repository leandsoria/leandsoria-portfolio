'use strict';

const navBar = document.querySelector('.nav__list');
const btnNav = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');

// Smooth scroll
navBar.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const target = e.target.getAttribute('href');
    console.log(target);
    if (!e.target.classList.contains('5')) {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }
});

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hiden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
});

// Lazy loading images
// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImage = function (entries, observer) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   // Replacing src with data-src
//   entries.forEach(e => {
//     e.target.src = e.target.dataset.src;
//   });

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//     console.log(entries);
//   });
// };

// const imgObserver = new IntersectionObserver(loadImage, {
//   root: null,
//   threshold: 0.1,
//   rootMargin: '100px',
// });

// imgTargets.forEach(img => {
//   imgObserver.observe(img);
//   console.log(img.src);
// });
