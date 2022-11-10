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
for (let emotions of user.history) {
    if (emotions.time.slice(0, 10) === today) {
        let time = emotions.time.slice(11, 17)
        let emotion = emotions.emotion
        let str = `
        <div class="single-timeline-area">
            <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft emotion ${emotion}" data-wow-delay="0.3s"
                        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-text">
                            <h6>${emotion}</h6>
                            <p><small>${time}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        if (Number(time.slice(0, 2)) < 12) {
            morning += str
        } else if (Number(time.slice(0, 2)) < 19) {
            afternoon += str
        } else {
            evening += str
        }
    }
}

// List of event listener
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('profile-name').innerText += ` ${profilename}`
    document.getElementById('morning').innerHTML = morning
    document.getElementById('afternoon').innerHTML = afternoon
    document.getElementById('evening').innerHTML = evening
}
)

document.getElementById("log-out").addEventListener("click", function (event) {
    sessionStorage.clear();
})



// List of function


/*
< !--Single Timeline Content-- >
<div class="single-timeline-area">
    <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
    </div>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="single-timeline-content d-flex wow fadeInLeft emotion anxiety"                  > pilihan emotion (lowercase)
                data-wow-delay="0.3s"
                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="timeline-text">
                    <h6>Anxiety</h6>                                                                    > pilihan time
                    <p><small>10.01</small></p>                                                         > pilihan emotion
                </div>
            </div>
        </div>
    </div>
</div>

Needs:
1. time
2. pilihan emotion
3. 

{
    id:
    username:
    email:
    password:  
    bio : {age, sex, goals}
    history: [
        {emotion_id, time, emotion},
        {emotion_id, time, emotion},
        {emotion_id, time, emotion}
    ]
}

*/