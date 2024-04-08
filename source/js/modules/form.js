const nameInputField = document.querySelector('#name');
const phoneInputField = document.querySelector('#phone');
const formContainer = document.querySelector('.form');
const form = formContainer.querySelector('form');
const errorTextPhone = phoneInputField.nextElementSibling;
const errorTextName = nameInputField.nextElementSibling;
const phoneRegExp = /^[ 0-9]+$/;
const validateRegex = /^[a-zA-ZА-ЯЁа-яё ]*$/;
const submitButton = document.querySelector('.button--submit');

function showErrorPhone() {
  if (phoneInputField.validity.valueMissing) {
    errorTextPhone.textContent = 'Введите, пожалуйста, номер телефона';
  } else if (!phoneRegExp.test(phoneInputField.value)) {
    errorTextPhone.textContent = 'Введите номер в формате 79998877666';
  } else if (phoneInputField.validity.tooShort) {
    errorTextPhone.textContent = `Введите не менее ${phoneInputField.minLength} символов`;
  }
}

function showErrorName() {
  if (nameInputField.validity.valueMissing) {
    errorTextName.textContent = 'Введите, пожалуйста, Ваше имя';
  } else if (!nameInputField.validity.valueMissing) {
    errorTextName.textContent = '';
  }
}

const validateNameField = () => {
  nameInputField.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    if (!validateRegex.test(inputValue)) {
      event.target.value = inputValue.replace(/[^a-zA-ZА-ЯЁа-яё ]/g, '');
      showErrorName();
    }

    errorTextName.textContent = '';
    submitButton.removeAttribute('disabled', 'disabled');
  });
};

const validatePhoneField = () => {

  phoneInputField.addEventListener('input', () => {

    if (phoneInputField.validity.valid) {
      errorTextPhone.textContent = '';
      submitButton.removeAttribute('disabled', 'disabled');
    } else {
      showErrorPhone();
    }
  });
};

const validateForm = () => {
  form.addEventListener('submit', (event) => {
    const isValid = phoneInputField.validity.valid && phoneRegExp.test(phoneInputField.value) && (!nameInputField.validity.valueMissing);

    if (!isValid) {
      showErrorPhone();
      showErrorName();
      submitButton.setAttribute('disabled', 'disabled');
      event.preventDefault();
    } else if (isValid) {
      errorTextPhone.textContent = '';
      errorTextName.value = '';
    }
  }
  );
};


export { validateNameField, validatePhoneField, validateForm };
