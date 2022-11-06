const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const word = document.querySelector('.input-text');

btn.addEventListener('click', countVowel);

function countVowel() {
  let vowelCount = 0;
  let wordValue = word.value.toLowerCase();

  for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    if (letter.match(/([aeiou])/)) {
      vowelCount++;
    }
  }
  result.textContent = `${word.value} has ${vowelCount} vowel(s)`;
}