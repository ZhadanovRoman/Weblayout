function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

  
    nameError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (!nameInput.checkValidity()) {
        nameError.textContent = 'Имя должно содержать от 3 до 30 символов, только кириллицу/латиницу.';
    }

    if (!phoneInput.checkValidity()) {
        phoneError.textContent = 'Телефон должен содержать от 10 до 15 цифр и может начинаться с плюса.';
    }

    if (!passwordInput.checkValidity()) {
        passwordError.textContent = 'Пароль должен содержать от 8 до 40 символов, хотя бы одну заглавную букву и цифру.';
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Пароли должны совпадать.';
    }
}