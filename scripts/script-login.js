// // const {users} = require('./list_users.js')
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const users = JSON.parse(localStorage.list_users)

// List of Event listener
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    let isUser = false
    for (let key in users) {
        let user = users[key]
        console.log(username, user.username, password === user.password)
        if (username === user.username && password === user.password) {
            isUser = true
            break
        }
    }

    if (isUser) {
        populateStorage()
        location.assign('./status.html');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})





// List of function
function populateStorage() {
    sessionStorage.setItem('username', document.getElementById("login-form").username.value);
}

function callUser() {
    return [
        {
            id: 10,
            username: 'fahmifachrizal',
            email: 'fahmifachrizal@cheer.io',
            password: 'password',
            bio: { fullname: 'Fahmi Fachrizal', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
        {
            id: 9,
            username: 'admin',
            email: 'admin@cherio.com',
            password: 'admin123',
            bio: { fullname: 'Admin', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
        {
            id: 11,
            username: 'jojorda',
            email: 'jojorda@cheer.io',
            password: 'password',
            bio: { fullname: 'Moch Jordan', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
        {
            id: 12,
            username: 'vrush2000',
            email: 'vrush2000@cheer.io',
            password: 'password',
            bio: { fullname: 'Syamsul Bahri', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
        {
            id: 13,
            username: 'Reynzzz',
            email: 'Reynzzz@cheer.io',
            password: 'password',
            bio: { fullname: 'Rayhan Fatwa Madjid', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
        {
            id: 14,
            username: 'ArgeekBrambo',
            email: 'ArgeekBrambo@cheer.io',
            password: 'password',
            bio: { fullname: 'Argi Bramantya', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
        {
            id: 15,
            username: 'attar36',
            email: 'attar36@cheer.io',
            password: 'password',
            bio: { fullname: 'Attar Baqo', age: '20', sex: 'Male', goal: 'Happy' },
            history: [
                { emotion_id: '901', time: '2022-11-09T07:01', emotion: 'happy' },
                { emotion_id: '902', time: '2022-11-09T08:01', emotion: 'angry' },
                { emotion_id: '903', time: '2022-11-09T13:01', emotion: 'sad' },
                { emotion_id: '904', time: '2022-11-11T19:01', emotion: 'irritation' },
            ]
        },
    ]
}