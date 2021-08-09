const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date input min with today's date
const today = new Date().toISOString().split('T');
dateEl.setAttribute('min', today[0]);

// Populate countdown / Complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  // Populate countdown
  countdownElTitle.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  // Hide input
  inputContainer.hidden = true;
  // Show countdown
  countdownEl.hidden = false;
}

// Take values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log('countdownDate', countdownDate);
  // Get number version of current Date, updateDOM
  countdownValue = new Date(countdownDate).getTime();
  console.log('countdownValue', countdownValue);
  updateDOM();
}

// Event listeners
countdownForm.addEventListener('submit', updateCountdown);