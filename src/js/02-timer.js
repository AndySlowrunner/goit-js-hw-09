import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const input = document.getElementById('datetime-picker');
const fields = document.querySelectorAll('.field');
const timerEl = document.querySelector('.timer');
const spanEl = document.querySelectorAll('.value');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

timerEl.style.display = "flex";
spanEl.forEach(span => {
  span.style.fontSize = "24px";
});

fields.forEach(field => {
  field.style.display = "flex";
  field.style.flexDirection = "column";
  field.style.margin = "5px";
  field.style.textAlign = "center";
});

function disableBtn() {
  startBtn.disabled = true;
};
disableBtn();

function disableInput() {
  input.disabled = true;
};

let userDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = options.defaultDate.getTime();
    userDate = selectedDates[0].getTime();
    
    if (userDate <= currentDate) {
      Notify.warning("Please choose a date in the future");
    }else {
      startBtn.disabled = false;
      disableInput();
    }
  },
};

flatpickr('input[type = "text"]', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function updateFaceClock() {
  const currentDate = new Date();
  const timeDifference = userDate - currentDate;
  const timeConvert = convertMs(timeDifference);
  const { days, hours, minutes, seconds } = timeConvert;
  daysLeft.textContent = addLeadingZero(days);
  hoursLeft.textContent = addLeadingZero(hours);
  minutesLeft.textContent = addLeadingZero(minutes);
  secondsLeft.textContent = addLeadingZero(seconds);
};
function checkDeltaTime() {
  let deltaTime = userDate - Date.now();
  if (deltaTime < 1000) {
    input.disabled = false;
    clearInterval(timerId);
  };

}
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    updateFaceClock();
    checkDeltaTime();
  }, 1000);
  startBtn.disabled = true;
});