function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputElement = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = parseInt(inputElement.value);

  if (isNaN(amount) || amount <= 0 || amount > 100) {
    alert('Будь ласка, введіть число від 1 до 100.');
    return;
  }

  const fragment = document.createDocumentFragment();
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
