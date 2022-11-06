// All big things come from small beginnings. The seed of every habit is a single, tiny decision.

const count = document.querySelector('.count');
const subCount = document.querySelector('.subtract');
const resetCount = document.querySelector('.reset');
const addCount = document.querySelector('.add');
const buttons = document.querySelector('.buttons');

// control colors and numbers
buttons.addEventListener('click', (e) => {
  let content = Number(count.innerHTML);

  if (e.target.classList.contains('add')) {
    content++;
    count.innerHTML = content;
    setColor(content)
  }
  if (e.target.classList.contains('subtract')) {
    content--;
    count.innerHTML = content;
    setColor(content)
  }
  if (e.target.classList.contains('reset')) {
    content = 0
    count.innerHTML = content;
    setColor(content)
  }
});

function setColor(num) {
  if (num > 0) {
    count.style.color = 'yellow';
  } else if (num < 0) {
    count.style.color = 'orangered'
  } else {
    count.style.color = '#fff';
  }
}

// // control numbers
// let content = Number(count.innerHTML);
// addCount.addEventListener('click', () => {
//   content++;
//   count.innerHTML = content;
// });

// subCount.addEventListener('click', () => {
//   content--;
//   count.innerHTML = content;
// });

// resetCount.addEventListener('click', () => {
//   content = 0
//   count.innerHTML = content;
// });