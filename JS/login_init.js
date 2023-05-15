function init() {
    let container = document.getElementById("login-signin");

    let str = `<h1 class="text black-color margin-top-20 margin-bottom-20">Sign in</h1>
    <input type="email" id="email" placeholder="Email" class="login-input text font-size-14">
    <input type="password" id="password" placeholder="Password" class="login-input text font-size-14">
    <input type="password" id="password_confirm" placeholder="Confirm password" class="login-input text font-size-14">
    <button onclick="signin()" class="signin-btn border padding-5 text main-color bck-button-color margin-top-20">Enter</button>
    <p class="text black-color margin-top-20 margin-bottom-5">Already have an account?</p>
    <button onclick="login_init()" class="signin-btn border padding-5 text main-color bck-button-color">Log in</button>`;

    container.innerHTML = str;
}

init()

function login_init() {
    let container = document.getElementById("login-signin");

    let str = `<h1 class="text black-color margin-top-20 margin-bottom-20">Log in</h1>
    <input type="email" id="email" placeholder="Email" class="login-input text font-size-14">
    <input type="password" id="password" placeholder="Password" class="login-input text font-size-14">
    <button onclick="login()" class="signin-btn border padding-5 text main-color bck-button-color margin-top-20">Enter</button>
    <p class="text black-color margin-top-20 margin-bottom-5">Did't have account?</p>
    <button onclick="init()" class="signin-btn border padding-5 text main-color bck-button-color">Log in</button>`;

    container.innerHTML = str;
}