
// Hamburger Menu
const hamburgerButton = document.querySelector('.btn-mobile-nav');
const mainNavList = document.querySelector('.main-nav-list');
const header = document.querySelector('.header');

function toggleNav() {
  header.classList.toggle('nav-open');
}

hamburgerButton.addEventListener('click', toggleNav);
mainNavList.addEventListener('click', toggleNav);


// scroll to top button 
const scrollToTopButton = document.querySelector('.btn-scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

