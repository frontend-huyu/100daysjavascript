const links = document.querySelectorAll('.nav-list li a');
const header = document.querySelector('header');

for (let link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  });
}

// Sticky Header
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
})