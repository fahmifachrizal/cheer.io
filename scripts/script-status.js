const users = JSON.parse(localStorage.list_users)
let today = addHours(new Date(), 7).toISOString().slice(0, 10)
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

let lookup = { anger: 'angry', anxiety: 'anxiety', fear: 'fear', sadness: 'sad', angry: 'angry', anxiety: 'anxiety', fear: 'fear', sad: 'sad', happy:'happy'}

profilename = user.bio.fullname
for (let key in user.history) {
    let emotions = user.history[key]
    if (emotions.time.slice(0, 10) === today) {
        let time = emotions.time.slice(11, 16)
        let emotion = lookup[emotions.emotion]
        emotion = emotion.charAt(0).toUpperCase() + emotion.slice(1);
        let str = `
        <div class="single-timeline-area">
            <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft emotion ${String(emotion).toLowerCase()}" data-wow-delay="0.3s"
                        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-text">
                            <h6>${emotion}</h6>
                            <p><small>${time}</small></p>
                        </div>
                    </div>
                </div>
                <div id="idx${Number(key)}" class="delete-x" ><i class="fa fa-close"></i></div>
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
//onclick="document.getElementById('id01').style.display='block'"

// List of event listener
let to_delete = ''
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('profile-name').innerText += ` ${profilename}`;
    document.getElementById('morning').innerHTML = morning;
    document.getElementById('afternoon').innerHTML = afternoon;
    document.getElementById('evening').innerHTML = evening;
    (!document.getElementById('idx0') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx1') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx1').addEventListener('click', function (event) { to_delete = 'idx1' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx2') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx2').addEventListener('click', function (event) { to_delete = 'idx2' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx3') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx3').addEventListener('click', function (event) { to_delete = 'idx3' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx4') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx4').addEventListener('click', function (event) { to_delete = 'idx4' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx5') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx5').addEventListener('click', function (event) { to_delete = 'idx5' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx6') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx6').addEventListener('click', function (event) { to_delete = 'idx6' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx7') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx7').addEventListener('click', function (event) { to_delete = 'idx7' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx8') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx8').addEventListener('click', function (event) { to_delete = 'idx8' ; delete_emotion(user,to_delete); }));
    (!document.getElementById('idx9') ? document.getElementById('idx0').addEventListener('click', function (event) { to_delete = 'idx0' }) : document.getElementById('idx9').addEventListener('click', function (event) { to_delete = 'idx9' ; delete_emotion(user,to_delete); }));
    // delete_emotion(user,to_delete); // location.reload();
}
)

function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}

function delete_emotion(user, to_delete) {
    for (let key in user.history) {
        let emotions = user.history[key]
        if (emotions.emotion_id === to_delete) {
            user.history.splice(Number(key), 1)
        }
    }
    for (let key in user.history) {
        let emotions = user.history[key]
        emotions.emotion_id = `idx${String(key)}`
        user.history[key]=emotions
    }
    for (let key in users) {
        let val = users[key]
        if (val.username === username) {
            val.history=user.history
        }
    }
    populateStorage()
    location.reload();
    return users
}

function populateStorage() {
    localStorage.setItem(`list_users`, JSON.stringify(users));
}

// document.getElementById("log-out").addEventListener("click", function (event) {
//     sessionStorage.clear();
// })



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