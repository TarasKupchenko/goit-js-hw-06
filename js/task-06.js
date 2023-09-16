
const input = document.querySelector('#validation-input');

const dataLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', () => {

  const inputValue = input.value;
  const inputLength = inputValue.length;

  if (inputLength === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});