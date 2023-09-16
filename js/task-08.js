const loginForm = document.querySelector('.login-form');
const loginButton = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener('submit', function (event) {
   event.preventDefault();
  const formData = new FormData(loginForm);
  const formValues = {};
  
  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  if (!formValues.email || !formValues.password) {
    alert('Всі поля повинні бути заповнені');
    return;
  }
  console.log(formValues);

  loginForm.reset();
});
