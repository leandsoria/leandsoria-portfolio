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
