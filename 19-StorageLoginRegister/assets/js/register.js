const registerForm = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const passwordStrengthIcon = document.getElementById("passwordStrengthIcon");

function isUsernameValid(username) {
  return /^[a-zA-Z0-9_-]{3,20}$/.test(username);
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&])[A-Za-z\d@#$%&]{8,}$/.test(password);
}

function showToast(text, color = "linear-gradient(to right, #00b09b, #96c93d)") {
  Toastify({
    text,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: color,
    },
  }).showToast();
}

function checkPasswordStrength(password) {
  if (isStrongPassword(password)) {
    passwordStrengthIcon.textContent = "✔️";
    passwordStrengthIcon.style.color = "green";
  } else {
    passwordStrengthIcon.textContent = "❌";
    passwordStrengthIcon.style.color = "red";
  }
}

passwordInput.addEventListener("input", () => {
  checkPasswordStrength(passwordInput.value);
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let hasError = false;

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";

  if (!isUsernameValid(username)) {
    usernameError.textContent = "İstifadəçi adı 3-20 simvol və yalnız hərf, rəqəm, alt xətt və tire ola bilər.";
    hasError = true;
  }

  if (!isEmailValid(email)) {
    emailError.textContent = "Düzgün email formatı daxil edin.";
    hasError = true;
  }

  if (!isStrongPassword(password)) {
    passwordError.textContent = "Şifrə güclü olmalıdır: 8 simvol, böyük/kiçik hərf, rəqəm və xüsusi simvol.";
    hasError = true;
  }

  if (password !== confirmPassword) {
    confirmError.textContent = "Şifrələr uyğun deyil.";
    hasError = true;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(user => user.username === username)) {
    usernameError.textContent = "Bu istifadəçi adı artıq mövcuddur.";
    hasError = true;
  }

  if (users.find(user => user.email === email)) {
    emailError.textContent = "Bu email artıq mövcuddur.";
    hasError = true;
  }

  if (!hasError) {
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Uğurla qeydiyyatdan keçdiniz!");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  }
});
