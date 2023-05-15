import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stepInput = form.querySelector('[name="step"]');
const amountInput = form.querySelector('[name="amount"]');

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });// Fulfill
            } else {
                reject({ position, delay });// Reject
            }
        }, delay);
    });
};

function createPromises(delay, step, amount) {
  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promiseDelay = delay + step * i;
    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let delay = parseInt(delayInput.value);
  let step = parseInt(stepInput.value);
  let amount = parseInt(amountInput.value);
  if ((delay < 0 || step < 0) || amount <= 0) {
    Notify.warning('Please enter a positive value!');
    return;
  }
  createPromises(delay, step, amount);
}

form.addEventListener('submit', handleSubmit);