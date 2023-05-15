function signin() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let password_confirm = document.getElementById("password_confirm");

  if (password.value.length < 8) {
    alert("Пароль має бути не менше 8 символів!");
    password.value = "";
    password_confirm.value = "";
    return;
  }

  if (email.value == "") {
    alert("Введіть email!");
    return;
  }

  if (password.value != password_confirm.value) {
    alert("Паролі не співпадають!");
    password.value = "";
    password_confirm.value = "";
    return;
  }


  let email_local = localStorage.getItem("email");
  let password_local = localStorage.getItem("password");

  if (email.value == email_local && password.value == password_local) {
    alert("Ви вже зареєстровані!");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  }

  login_init();
}

function login() {
  let email_local = localStorage.getItem("email");
  let password_local = localStorage.getItem("password");

  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value == email_local && password.value == password_local) {
    alert("Ви успішно увійшли!");
    window.location.href = "index.html";
    return;
  }

  alert("Невірний логін або пароль!");
}