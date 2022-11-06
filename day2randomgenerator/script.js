// const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);

const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {
  // Generate number 1 - 10
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.textContent = randomNumber;
}

btn.addEventListener('click', generateNumber);

// for every reload
generateNumber();