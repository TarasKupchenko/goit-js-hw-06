const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterValue();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = counterValue;
}