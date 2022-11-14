const scrollBtn = document.querySelector('.top');
//  root element of html is <html>
const rootEl = document.documentElement;

document.addEventListener('scroll', showBtn);
scrollBtn.addEventListener('click', scrollToTop);

function showBtn() {
  // NOTE: rootElement scrollTop always start from 0
  // NOTE: rootElement scrollHeight is the total height of all element
  // NOTE: rootElement clientHeight is the viewport's height

  // all content height - visible height
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;

  // if user scroll down over 30% of the content
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add('show-btn');
  } else {
    scrollBtn.classList.remove('show-btn');
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}