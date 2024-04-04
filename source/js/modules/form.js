const validateInput = (inputFieldSelector) => {
  const inputFields = document.querySelectorAll(inputFieldSelector);

  const validateRegex = /^[a-zA-Z ]*$/;

  inputFields.forEach((inputField) => {
    inputField.addEventListener('input', (event) => {
      const inputValue = event.target.value;
      if (!validateRegex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Z ]/g, '');
      }
    });
  });
};

export { validateInput };
