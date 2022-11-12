// Node.js 17.1 with the experimental flag --experimental-json-modules and in Chrome 91 and above
// import data from './data.json' assert { type: 'json' };
// console.log(data);
// import dynamically
const { default: data } = await import('./data.json', { assert: { type: 'json' } });

const input = document.getElementById('search');
const sortedList = document.getElementById('list');
// keydown => keypress => keyup
input.addEventListener('keyup', search);

function search() {
  const inputValue = input.value.toLowerCase();
  let resultArr = sortedResult(filteredItem(data, inputValue), inputValue);
  let output = ''

  resultArr.forEach((country) => {
    output += `
    <li>
      ${country.name}
    </li>
    `.trim();
  })

  sortedList.innerHTML = output;
}

function filteredItem(data, inputValue) {
  return data.filter((country) => {
    if (country.name.toLowerCase().match(inputValue)) {
      return country.name.toLowerCase().match(inputValue)
    }
    if (country.code.toLowerCase().match(inputValue)) {
      return country.code.toLowerCase().match(inputValue)
    }
  })
}

function sortedResult(arr, word) {
  let firstLetter = word.toLowerCase().codePointAt(0);
  return arr.sort((a, b) => {
    let item = a.name.toLowerCase().codePointAt(0);
    if (item === firstLetter) return -1
  })
}