const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "a" && password === "a") {
        location.assign('./status.html');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

console.log(loginForm['username'])
console.log(loginForm['password'])
