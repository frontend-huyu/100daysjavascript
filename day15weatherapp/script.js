// One Call API 3.0
// free => Current Weather/Air Pollution API/Geocoding API/Weather widgets
const api = {
  key: "2064c4772baeb5c2f553c3d42fd1cf24",
  base: "https://api.openweathermap.org/data/2.5/"
}
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const tempRange = document.querySelector('.temp-range');
const weatherIcon = document.querySelector('.weather-icon');
const iconURL = 'http://openweathermap.org/img/wn/';
// 
const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
console.log(userLocale);
// console.log(navigator.languages);
const langObj = {
  en: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  ja: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    days: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
  }
}

btn.addEventListener('click', getInput);

function getInput(e) {
  e.preventDefault();
  if (e.type === 'click') {
    getData(search.value);
  }
}

function getData(value) {
  fetch(`${api.base}weather?q=${value}&lang=${userLocale}&units=metric&appid=${api.key}`)
    .then((response) => {
      return response.json();
    })
    .then(displayData);
}

function displayData(response) {
  console.log(response);
  // cod: Internal parameter
  if (response.cod === '404') {
    // TODO: change the different alert by according to lang
    error.textContent = 'Please enter a valid city';
  } else {
    // city & country
    city.textContent = `${response.name}, ${response.sys.country}`;
    // today
    const today = new Date();
    date.textContent = showDate(today, userLocale);
    // temperature
    temperature.textContent = `Temp: ${Math.round(response.main.temp)}°C`;
    // weather
    weather.textContent = `Weather: ${response.weather[0].main}`;
    tempRange.textContent = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

    // icon
    weatherIcon.src = `${iconURL}${response.weather[0].icon}@2x.png`;
  }
  search.value = '';
}

function showDate(today, lang) {
  let days = {};
  let months = {};
  if (lang === 'en' || lang === 'en-US') {
    days = langObj.en.days;
    months = langObj.en.months;
  } else if (lang === 'ja') {
    days = langObj.ja.days;
    months = langObj.ja.months;
  }

  let day = days[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];
  let year = today.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

