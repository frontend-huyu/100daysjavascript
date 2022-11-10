const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');
const quoteField = document.querySelector('.quotes');
const URL = 'https://type.fit/api/quotes';

btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();
  if (number.value === '0') {
    return alert('Please enter a number');
  } else {
    fetch(URL)
      .then((response) => {
        // NOTE: response only can be read once
        return response.json();
      })
      .then((quotes) => {
        quotes = randomPick(quotes, Number(number.value));

        let output = '';
        quotes.forEach((quote) => {
          output += `
            <li>Quote: ${quote.text}</li>
            <li>Author: ${quote.author}</li>
            <hr>
            `.trim();
        })
        quoteField.innerHTML = output;
      })
  }
}

function randomPick(quotes, number) {
  let quoteLength = quotes.length;
  let result = [];

  for (let i = 0; i < number; i++) {
    // 100 * 0.9 => 90, 99 * 0.9 => 89
    let randomIndex = Math.floor(Math.random() * quoteLength);

    // check duplication
    let checker = result.filter((item) => JSON.stringify(item) === JSON.stringify(quotes[randomIndex]));
    if (checker.length > 0) {
      i--;
    } else {
      result.push(quotes[randomIndex]);
    }
  }
  return result;
}

