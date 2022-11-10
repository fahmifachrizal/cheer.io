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
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('profile-name').innerText += ` ${profilename}`
}
)


let playpause_btn = document.getElementById("playpause-track");
let vol1 = document.getElementById("slider1");
let vol2 = document.getElementById("slider2");
let vol3 = document.getElementById("slider3");
let vol4 = document.getElementById("slider4");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let audio3 = document.getElementById('audio3');
let audio4 = document.getElementById('audio4');


function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {
    // Play the loaded track
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    isPlaying = true;

    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    // Pause the loaded track
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    isPlaying = false;

    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    audio1.volume = slider1.value / 100;
    audio2.volume = slider2.value / 100;
    audio3.volume = slider3.value / 100;
    audio4.volume = slider4.value / 100;
}