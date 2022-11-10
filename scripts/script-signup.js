const aaaa = JSON.parse(localStorage.list_users)
const loginForm = document.getElementById("login-form");
console.log(users)

// TODO Event listerner
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fullname = loginForm.fullname.value;
    const email = loginForm.email.value;
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    let obj = {
        id: 11,
        username: username,
        email: email,
        password: password,
        bio: { fullname: fullname, age: ``, sex: ``, goal: `` },
        history: []
    }
    users.push(obj)
    populateStorage()
    location.assign('./login.html');
})

// TODO List of function
function addNewUser() {
    localStorage.setItem(`list_users`, JSON.stringify(users));
}