
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


const list_users = [
    {
        id: 9,
        username: 'admin',
        email: 'admin@cherio.com',
        password: 'admin123',
        bio : {age:'20', sex:'Male', goal:'Happy'},
        history: [
            {emotion_id: '901', time:'2022-11-09T07:01', emotion: 'happy'},
            {emotion_id: '902', time:'2022-11-09T08:01', emotion: 'angry'},
            {emotion_id: '903', time:'2022-11-09T13:01', emotion: 'sad'},
            {emotion_id: '904', time:'2022-11-11T19:01', emotion: 'irritation'},
        ]
    }
]


let username ='admin'
let morning =''
let afternoon=''
let evening=''

let today = new Date().toISOString().slice(0, 10)
console.log(today)
for (let user of list_users){
    if (user.username === username){
        for (let emotions of user.history){
            if (emotions.time.slice(0,10) === today){
                let time = emotions.time.slice(11, 17)
                let emotion = emotions.emotion

                let str = 
                `
                <div class="single-timeline-area">
                    <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="single-timeline-content d-flex wow fadeInLeft emotion ${emotion}"
                                data-wow-delay="0.3s"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                <div class="timeline-text">
                                    <h6>${emotion[0].toUpperCase()}${emotion.slice(1)}</h6>
                                    <p><small>${time}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

                if (Number(time.slice(0,2))<12){
                    morning+= str
                } else if (Number(time.slice(0,2))<19){
                    afternoon+=str
                } else {
                    evening+=str
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('morning').innerHTML = morning
    document.getElementById('afternoon').innerHTML = afternoon
    document.getElementById('evening').innerHTML = evening
})


