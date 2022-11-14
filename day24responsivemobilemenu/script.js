const links = document.querySelectorAll('.nav-list li a');

for (let link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  });
  hideMenu();
}

// responsive mobile menu
const menu = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

// NOTE: translateY(0) => original position
const showMenu = () => {
  hamburger.style.display = 'none';
  close.style.transform = 'translateY(0)';
  menu.style.transform = 'translateY(0)';
};

// NOTE: translateY(-200%) => element height * 2 upwards
const hideMenu = () => {
  hamburger.style.display = 'block';
  close.style.transform = 'translateY(-20rem)';
  menu.style.transform = 'translateY(-200%)';
};

hamburger.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);