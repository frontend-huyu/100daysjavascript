const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

function setColor() {
  bgColor.classList.add('online');
}

// NOTE: if the fetch is successful, it means internet connection is active
async function connectionStatus() {
  try {
    // fetch image with current time
    // NOTE: "url + timestamp" will ensure it won't be cached in first request, every time we refresh page(get) or post it will make new request
    const fetchResult = await fetch(
      `https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=${new Date().getTime()}`
    );
    image.src = './images/online.png';
    setColor();
    return fetchResult.status >= 200 && fetchResult.status.status < 300;
  } catch (err) {
    // console.log(err);
    statusDisplay.textContent = 'OOPS! Your Internet Connection is down.';
    image.src = './images/offline.png';
    bgColor.classList.remove('online');
  }
}

// monitor the connection
setInterval(async () => {
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = 'Your are ONLINE, Connection looks good.';
    setColor();
  }
}, 5000);

// NOTE: check connection when the page loads
window.addEventListener('load', (e) => {
  if (connectionStatus()) {
    statusDisplay.textContent = 'Your are ONLINE, Connection looks good.';
  } else {
    statusDisplay.textContent = 'OOPS! Your Internet Connection is down.';
  }
});
