const nameInputField = document.querySelector('#name');
const phoneInputField = document.querySelector('#phone');
const formContainer = document.querySelector('.form');
const form = formContainer.querySelector('form');
const errorText = document.querySelector('.input__text');
const errorClass = document.querySelector('.input__text--error');

function showError() {
  if (phoneInputField.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    errorText.textContent = 'Введите, пожалуйста, номер телефона';
  } else if (phoneInputField.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    errorText.textContent = 'Допускается вводить только цифры';
  } else if (phoneInputField.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    errorText.textContent = `Email should be at least ${phoneInputField.minLength} characters; you entered ${phoneInputField.value.length}.`;
  }

  // Задаём соответствующую стилизацию
  errorText.classList.add(errorClass);
}

const validateNameField = () => {
  const validateRegex = /^[a-zA-Z ]*$/;
  nameInputField.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    if (!validateRegex.test(inputValue)) {
      event.target.value = inputValue.replace(/[^a-zA-Z ]/g, '');
    }
  });
};

const validatePhoneField = () => {
  phoneInputField.addEventListener('submit', () => {
    if (phoneInputField.validity.valid) {
      // Если на момент валидации какое-то сообщение об ошибке уже отображается,
      // если поле валидно, удаляем сообщение
      errorText.textContent = ''; // Сбросить содержимое сообщения
      errorText.classList.remove(errorClass); // Сбросить визуальное состояние сообщения
    } else {
      // Если поле не валидно, показываем правильную ошибку
      showError();
    }
  });

  form.addEventListener('submit', (event) => {
    // Если поле email валдно, позволяем форме отправляться

    if (!phoneInputField.validity.valid) {
      // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
      showError();
      // Затем предотвращаем стандартное событие отправки формы
      event.preventDefault();
    }
  });
};

export { validateNameField, validatePhoneField, showError };
