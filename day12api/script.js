const btn = document.querySelector('.btn');
const userLocation = document.querySelector('.location');

btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

function showPosition(position) {
  userLocation.innerHTML = `
  Latitude: ${position.coords.latitude} <br>
  Longitude: ${position.coords.longitude} <br>
  `;
}
