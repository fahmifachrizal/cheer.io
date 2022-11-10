// // const {users} = require('./list_users.js')
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const users = JSON.parse(localStorage.list_users)

// List of Event listener
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    let isUser = false
    for (let key in users) {
        let user = users[key]
        console.log(username, user.username, password === user.password)
        if (username === user.username && password === user.password) {
            isUser = true
            break
        }
    }

    if (isUser) {
        populateStorage()
        location.assign('./status.html');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


// List of function
function populateStorage() {
    sessionStorage.setItem('username', document.getElementById("login-form").username.value);
    localStorage
}
