const users = JSON.parse(localStorage.list_users)
let username = sessionStorage.username
let user = {}

for (let key in users) {
    let val = users[key]
    if (val.username === username) {
        user = val
    }
}
profilename = user.bio.fullname

// List of event listener
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('profile-name').innerText += ` ${profilename}`
}
)

// document.getElementById("log-out").addEventListener("click", function (event) {
//     sessionStorage.clear();
// })
