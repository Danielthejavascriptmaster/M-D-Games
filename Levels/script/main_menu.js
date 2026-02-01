const username = window.prompt("Enter your username: ");

let user_data = {
    "username": username,
    "coins": 0,
    "level": 0,
    "XP": 0
} 
localStorage.setItem("user", JSON.stringify(user_data));

let whole_data = JSON.parse(localStorage.getItem("user"));
let data_username = whole_data.username
console.log(data_username);