const counting = document.getElementById('countdown');
const minute = document.getElementById('minute');
const btn = document.querySelector('.btn');
let promoTimer;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  // prevent executed in duplicate
  clearInterval(promoTimer);
  promoTimer = countDown();
})

function countDown() {
  let time = Number(minute.value);
  let totalSeconds = time * 60;
  let timerID = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(promoTimer);
      counting.textContent = `Promo has ended.`;
    } else {
      totalSeconds--;
      let hours = Math.floor(totalSeconds / 3600) % 24;
      let min = Math.floor(totalSeconds / 60) % 60;
      let sec = Math.floor(totalSeconds % 60);

      counting.innerHTML = `Time: ${format(hours)}hr : ${format(min)}min : ${format(sec)}s`
    }
  }, 1000);
  return timerID;
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}

