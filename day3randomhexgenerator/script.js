// let color = Math.random();
// color = color.toString(16).substring(2, 8);

const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate');

const generatorColor = () => {
  // String.prototype.substring()
  const randomColor = Math.random().toString(16).substring(2, 8);
  // document.body.style.backgroundColor
  // document.getElementById("myDiv").style.backgroundColor)
  document.body.style.backgroundColor = '#' + randomColor;
  hex.innerHTML = '#' + randomColor;
};

btn.addEventListener('click', generatorColor);
generatorColor();