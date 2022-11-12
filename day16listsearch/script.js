const input = document.getElementById('search');
const list = document.getElementsByTagName('li');
// console.log(list[0].textContent);
// keydown => keypress => keyup
input.addEventListener('keyup', search);

function search() {
  const inputValue = input.value.toLowerCase();
  for (let i = 0; i < list.length; i++) {
    if (list[i].textContent.toLowerCase().includes(inputValue)) {
      // NOTE: when we set '' or null in style.display, it means "reset(using the css setting)""
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
}

