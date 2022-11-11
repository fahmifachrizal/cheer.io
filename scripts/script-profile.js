const users = JSON.parse(localStorage.list_users)
let today = new Date().toISOString().slice(0, 10)
let username = sessionStorage.username
let profilename = ''
let user = {}


for (let key in users) {
    let val = users[key]
    if (val.username === username) {
        user = val
    }
}

profilename = user.bio.fullname
document.getElementById("name").innerHTML = profilename;
document.getElementById("email").innerHTML = user.email;
document.getElementById("status").innerHTML = user.history[user.history.length].emotion;
document.getElementById("weight").innerHTML = weight;
document.getElementById("height").innerHTML = 178;
const goal = ["Boxing", "Running", "Dring More Water", "Stop Smoking"] //List dari DB
const container = document.getElementById("goals")
for (let i = 0; i < goal.length; i++) {
    container.innerHTML += `
    <li>${goal[i]}</li>
    `
}