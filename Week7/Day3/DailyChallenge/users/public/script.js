
const loginForm = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

function toggleButton() {
    loginBtn.disabled = !username.value.trim() || !password.value.trim();
}

username.addEventListener('input', toggleButton);
password.addEventListener('input', toggleButton);

const registerForm = document.getElementById('registerForm');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
// const username = document.getElementById('username');
const registerBtn = document.getElementById('registerBtn');

function toggleButton() {
    registerBtn.disabled = !firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !username.value.trim();
}

firstName.addEventListener('input', toggleButton);
lastName.addEventListener('input', toggleButton);
email.addEventListener('input', toggleButton);
username.addEventListener('input', toggleButton);