let this_day = new Date().toISOString().slice(0, 10)
const users = [
    {
        id: 9,
        username: `admin`,
        email: `admin@cherio.com`,
        password: `admin123`,
        bio: { fullname: `Admin`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
    {
        id: 10,
        username: `fahmifachrizal`,
        email: `fahmifachrizal@cheer.io`,
        password: `password`,
        bio: { fullname: `Fahmi Fachrizal`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
    {
        id: 11,
        username: `jojorda`,
        email: `jojorda@cheer.io`,
        password: `password`,
        bio: { fullname: `Moch Jordan`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
    {
        id: 12,
        username: `vrush2000`,
        email: `vrush2000@cheer.io`,
        password: `password`,
        bio: { fullname: `Syamsul Bahri`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
    {
        id: 13,
        username: `Reynzzz`,
        email: `Reynzzz@cheer.io`,
        password: `password`,
        bio: { fullname: `Rayhan Fatwa Madjid`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
    {
        id: 14,
        username: `ArgeekBrambo`,
        email: `ArgeekBrambo@cheer.io`,
        password: `password`,
        bio: { fullname: `Argi Bramantya`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
    {
        id: 15,
        username: `attar36`,
        email: `attar36@cheer.io`,
        password: `password`,
        bio: { fullname: `Attar Baqo`, age: `20`, sex: `Male`, goal: `Happy` },
        history: [
            { emotion_id: `901`, time: `${this_day}T07:01`, emotion: `happy` },
            { emotion_id: `902`, time: `${this_day}T08:01`, emotion: `angry` },
            { emotion_id: `903`, time: `${this_day}T13:01`, emotion: `sad` },
            { emotion_id: `904`, time: `${this_day}T19:01`, emotion: `irritation` },
        ]
    },
]

// TODO Event listerner
document.addEventListener("DOMContentLoaded", function (event) {populateStorage()})
console.log(localStorage)

// TODO List of function
function populateStorage() {
    localStorage.setItem(`list_users`, JSON.stringify(users));
}