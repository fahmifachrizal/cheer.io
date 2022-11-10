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
const save_button = document.getElementsByClassName('save')
const emotion = document.getElementById('emotion').innerHTML
const time =

document.addEventListener("click", function (event) {
    let time = new Date().toISOString()
    let obj = {emotion_id:`666`, time:time, emotion:String(emotion).toLowerCase()} 
    for (let key in users) {
        let val = users[key]
        if (val.username === username) {
            val.history.push(obj)
        }
    }
    populateStorage()

}
)

// TODO List of function
function populateStorage() {
    localStorage.setItem(`list_users`, JSON.stringify(users));
}

// { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
// `anger`
// `anxiety`
// `fear`
// `sadness`
