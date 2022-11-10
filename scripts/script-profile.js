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


const name = profilename
document.getElementById("name").innerHTML = name;

const email = "Email"
document.getElementById("email").innerHTML = email;

const status = "Status"
document.getElementById("status").innerHTML = status;

const weight = "BB"
document.getElementById("weight").innerHTML = weight;

const height = "TB"
document.getElementById("height").innerHTML = height;

const goal = ["Boxing", "Running", "Dring More Water", "Stop Smoking"] //List dari DB



const container = document.getElementById("goals")

for (let i = 0; i < goal.length; i++) {
 
    container.innerHTML += `
    <li>${goal[i]}</li>
    `
}