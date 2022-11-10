const users = JSON.parse(localStorage.list_users)
let today = new Date().toISOString().slice(0, 10)
let username = sessionStorage.username
let profilename = ''
let morning = ''
let afternoon = ''
let evening = ''
let user = {}

for (let key in users) {
    let val = users[key]
    if (val.username === username) {
        user = val
    }
}

profilename = user.bio.fullname
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('profile-name').innerText += ` ${profilename}`
}
)


function playAudio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    audio1.play();
    audio2.play();
}