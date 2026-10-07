function handleRegister(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    clearErrors();

    var isValid = true;

    if (username.length < 2) {
        showError('usernameError', '用户名至少需要2个字符');
        setInputState('username', false);
        isValid = false;
    } else {
        setInputState('username', true);
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('emailError', '请输入有效的邮箱地址');
        setInputState('email', false);
        isValid = false;
    } else {
        setInputState('email', true);
    }

    var phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        showError('phoneError', '请输入有效的11位手机号');
        setInputState('phone', false);
        isValid = false;
    } else {
        setInputState('phone', true);
    }

    if (password.length < 6) {
        showError('passwordError', '密码至少需要6位');
        setInputState('password', false);
        isValid = false;
    } else {
        setInputState('password', true);
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', '两次输入的密码不一致');
        setInputState('confirmPassword', false);
        isValid = false;
    } else if (confirmPassword.length > 0) {
        setInputState('confirmPassword', true);
    }

    if (isValid) {
        document.getElementById('successModal').classList.add('active');
    }

    return false;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function setInputState(inputId, isSuccess) {
    var input = document.getElementById(inputId);
    input.classList.remove('input-error', 'input-success');
    input.classList.add(isSuccess ? 'input-success' : 'input-error');
}

function clearErrors() {
    var errorMsgs = document.querySelectorAll('.error-msg');
    for (var i = 0; i < errorMsgs.length; i++) {
        errorMsgs[i].textContent = '';
    }

    var inputs = document.querySelectorAll('.input-group input');
    for (var j = 0; j < inputs.length; j++) {
        inputs[j].classList.remove('input-error', 'input-success');
    }
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    document.getElementById('registerForm').reset();
    clearErrors();
}