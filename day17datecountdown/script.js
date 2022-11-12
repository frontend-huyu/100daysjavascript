
const endDate = document.getElementById('d-day');
const btn = document.querySelector('.btn');
const countDown = document.getElementById('countdown');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  countTime();
})

function countTime() {
  const currentSeconds = Date.parse(new Date);
  const dDaySeconds = Date.parse(endDate.value);
  let toDDay = (dDaySeconds - currentSeconds) / 1000;
  // console.log(toDDay);

  const countTimer = setInterval(() => {
    const days = Math.floor(toDDay / 3600 / 24);
    const hours = Math.floor(toDDay / 3600) % 24;
    const minutes = Math.floor(toDDay / 60) % 60;
    const seconds = Math.floor(toDDay) % 60;
    countDown.textContent = `${days}Days ${timeFormat(hours)}Hr : ${timeFormat(minutes)}Min : ${timeFormat(seconds)}s`;

    if (toDDay === 0) {
      clearInterval(countTimer);
      countDown.textContent = `Good Luck!`;
    }
    toDDay--;
  }, 1000);
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}
