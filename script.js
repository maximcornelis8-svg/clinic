// Show what visitors should bring.
const tipsButton = document.querySelector('#tips-button');
const tips = document.querySelector('#tips');

tipsButton.addEventListener('click', () => {
  tips.textContent =
    'Bring your bicycle, a lock and, if you have them, the parts you want fitted.';
});


// Calculate the estimated price.
const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

function showEstimate() {
  const count = Math.max(
    0,
    Math.floor(Number(repairs.value) || 0)
  );

  const price = Number(service.value) + count * 5;

  total.textContent = 'EUR ' + price;
}

service.addEventListener('change', showEstimate);
repairs.addEventListener('input', showEstimate);

showEstimate();


// Check the booking form.
const form = document.querySelector('#booking-form');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();

  if (name === '') {
    message.textContent = 'Please enter your name.';
    return;
  }

  if (email === '') {
    message.textContent = 'Please enter your email address.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  message.textContent =
    'Nothing was sent and nothing was booked: this page cannot take bookings yet.';
});