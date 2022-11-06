// input
const btn = document.querySelector('.btn');
// output
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome)

// madam
// noon
function palindrome() {
  const word = document.querySelector('.input-text').value;
  let wordLength = word.length;

  // // solution 1
  // // even though word length is odd, because we don't need to compare the intermediate letter, just neglect it
  // let start = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();
  // let end = word.substring(wordLength - Math.floor(wordLength / 2)).toLowerCase();
  // // reverse word
  // // let flip = end.split('').reverse().join('');/
  // let flip = [...end].reverse().join('');
  // if (start === flip) {
  //   result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  // } else {
  //   result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
  // }

  // solution 2
  let temp = ''
  let lowerWord = word.toLowerCase();
  if (lowerWord) {
    // reverse word
    for (let i = lowerWord.length - 1; i >= 0; i--) {
      temp += lowerWord[i];
    }
    // compare two word
    if (lowerWord === temp) {
      result.textContent = `${word} is a palindrome`;
    } else {
      result.textContent = `${word} is not a palindrome`;
    }
  }
}