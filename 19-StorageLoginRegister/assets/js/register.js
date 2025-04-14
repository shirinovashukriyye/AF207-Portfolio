const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!^*()_+\-=]).{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.addEventListener("DOMContentLoaded", () => {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const usernameInput = document.querySelector("#username");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmpassword");

  passwordInput.addEventListener("input", handlePasswordStrength)

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!usernameRegex.test(username)) {
      return showToast("Username must be between 3-20 characters and contain only letters, numbers, etc.", "error");
    }

    if (!emailRegex.test(email)) {
      return showToast("Email is incorrect", "error");
    }

    if (!passwordRegex.test(password)) {
      return showToast("Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.", "error");
    }

    if (password !== confirmPassword) {
      return showToast("Password and verification must be the same.", "error");
    }

    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      return showToast("This username or email already exists.", "error");
    }

    const id = uuidv4();
    const newUser = {
      id,
      name,
      username,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Validation successfully!", "success");
    form.reset();
    resetPasswordIndicator();
  });

  function handlePasswordStrength() {
    const isStrong = passwordRegex.test(passwordInput.value);
    passwordInput.classList.remove("is-valid", "is-invalid");
    if (isStrong) {
      passwordInput.classList.add("is-valid");
    } else {
      passwordInput.classList.add("is-invalid");
    }
  }

  function resetPasswordIndicator() {
    passwordInput.classList.remove("is-valid", "is-invalid");
  }

  function showToast(message, type = "info") {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor:
        type === "success"
          ? "green"
          : type === "error"
          ? "red"
          : "#333",
    }).showToast();
  }
});


