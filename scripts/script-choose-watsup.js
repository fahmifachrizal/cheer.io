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
const save_button = document.getElementById('save')
const emotion = document.getElementById('emotion').innerHTML
const time_day = addHours(new Date(),7).toISOString()

document.addEventListener('click',console.log('clicked'))

save_button.addEventListener("click", function (event) {
    for (let key in users) {
        let val = users[key]
        let obj = {emotion_id:`idx${Number(val.history.length)+1}`, time:time_day, emotion:String(emotion).toLowerCase()} 
        if (val.username === username) {
            val.history.push(obj)
            val.history = val.history.sort(function(a,b){return new Date(a.time) - new Date(b.time);});

        }
    }
    populateStorage()
}
)

// TODO List of function
function populateStorage() {
    localStorage.setItem(`list_users`, JSON.stringify(users));
}


function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}
// { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
// `anger`
// `anxiety`
// `fear`
// `sadness`
