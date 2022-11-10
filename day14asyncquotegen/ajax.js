const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');
btn.addEventListener('click', getQuotes);

function getQuotes(e) {
  e.preventDefault();
  if (number.value === '0') {
    return alert('Please enter a number');
  } else {
    const https = new XMLHttpRequest();
    https.open('GET', 'https://type.fit/api/quotes', true);
    https.onload = function () {
      if (this.status === 200) {
        // NOTE: this.response is string, we need to make it json and parse to JavaScript object(array)
        const response = randomPick(JSON.parse(this.response), Number(number.value))

        let output = '';
        response.forEach((quote) => {
          output += `
          <li>
            Quote: ${quote.text}<br>
            Author: ${quote.author}
          </li>
          `.trim();
        })

        document.querySelector('.quotes').innerHTML = output;
      }
    }
    https.send();
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
