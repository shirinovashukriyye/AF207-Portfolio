document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
  
    const LOCKOUT_TIME = 15 * 60 * 1000;
    let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || {};
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const identifier = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      const currentTime = Date.now();
  
  
      if (
        loginAttempts[identifier] &&
        loginAttempts[identifier].lockedUntil > currentTime
      ) {
        const mins = Math.ceil(
          (loginAttempts[identifier].lockedUntil - currentTime) / 60000
        );
        showToast(` ${mins}`, "red");
        return;
      }
  
  
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
      const isUsername = /^[a-zA-Z0-9_-]{3,20}$/.test(identifier);
  
      if (!isEmail && !isUsername) {
        showToast("Username or email is not in the correct format.", "red");
        return;
      }
  
  
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&])[A-Za-z\d@#$%&]{8,}$/;
      if (!passwordRegex.test(password)) {
        showToast("Password does not meet the requirements.", "red");
        return;
      }
  
   
      const user = users.find(
        (u) => (u.username === identifier || u.email === identifier) && u.password === password
      );
  
      if (!user) {
        if (!loginAttempts[identifier]) {
          loginAttempts[identifier] = { count: 1, lockedUntil: 0 };
        } else {
          loginAttempts[identifier].count++;
          if (loginAttempts[identifier].count >= 5) {
            loginAttempts[identifier].lockedUntil = currentTime + LOCKOUT_TIME;
            loginAttempts[identifier].count = 0;
          }
        }
  
        localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
        showToast("Username və ya password is incorrect.", "red");
        return;
      }
  

      delete loginAttempts[identifier];
      localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
      localStorage.setItem("loggedInUser", JSON.stringify(user));
  
      showToast("Validation successfully!", "green");
  
    });
  
    function showToast(message, color) {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: color === "green" ? "green" : "red",
        },
      }).showToast();
    }
  });
  