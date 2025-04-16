const loginForm = document.getElementById("loginForm");

if (loginForm) {
  const loginInput = document.getElementById("loginInput");
  const loginPassword = document.getElementById("loginPassword");
  const loginError = document.getElementById("loginError");
  const passwordError = document.getElementById("passwordError");

  let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || { count: 0, lockTime: null };

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginValue = loginInput.value.trim();
    const password = loginPassword.value;

    const now = new Date().getTime();

    if (loginAttempts.lockTime && now < loginAttempts.lockTime) {
      const remaining = Math.ceil((loginAttempts.lockTime - now) / 1000 / 60);
      showToast(`Hesab bloklanıb. ${remaining} dəqiqə sonra yenidən cəhd edin.`, "linear-gradient(to right, #ff0000, #ff6a00)");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => (u.username === loginValue || u.email === loginValue) && u.password === password);

    loginError.textContent = "";
    passwordError.textContent = "";

    if (!user) {
      loginAttempts.count++;
      if (loginAttempts.count >= 5) {
        loginAttempts.lockTime = now + 15 * 60 * 1000; // 15 dəqiqəlik blok
        showToast("Çoxlu yanlış cəhd. Hesab 15 dəqiqəlik bağlandı.", "linear-gradient(to right, #ff0000, #ff6a00)");
      } else {
        showToast("İstifadəçi adı/email və ya şifrə yalnışdır.", "linear-gradient(to right, #ff0000, #ff6a00)");
      }
      localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));
      return;
    }


    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.removeItem("loginAttempts");
    showToast("Uğurla giriş etdiniz!");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  });
}
