const continue_button = document.getElementById("continue_button");
const response_label = document.getElementById("response_label");

const retrieved_data = JSON.parse(localStorage.getItem("user"));
const username = user.username;

window.alert("Level 1 was supposed to be easy");
window.alert(`Goodluck ${username}`);

continue_button.onclick = () => {
    response_label.innerHTML = "01110011 01100011 01110010 01101111 01101100 01101100 00100000 01100100 01101111 01110111 01101110 00101100 00100000 01100010 01101111 01110100 01110100 01101111 01101101 00100000 01101100 01100101 01100110 01110100"
};