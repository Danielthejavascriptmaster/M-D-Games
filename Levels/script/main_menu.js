import { add_user } from "../../utils/add_user.js";
import { check_shop } from "../../utils/check_shop_perm.js"

let developer_debug_button = document.getElementById("credit_label");
const shop_btn = document.getElementById("shop_btn");
const start_btn = document.getElementById("start_btn");
const setting_btn = document.getElementById("setting_btn");
window.onload = () => {
    idleTimer = setTimeout(() => {
        window.alert("What are you waiting for? Get to work!")
    }, (10000));
}

if(!localStorage.getItem("hasRun")){ //if false/if it hasnt ran yet
    localStorage.setItem("hasRun", "yes");

    let username = window.prompt("Set Your Username:");
    add_user(username);
}else if(localStorage){};

developer_debug_button.onclick = () => {
    clearTimeout(idleTimer);
    localStorage.clear();
    window.alert("This resets all progress");
};

start_btn.onclick = () => {
    clearTimeout(idleTimer);
};
setting_btn.onclick = () => {
    clearTimeout(idleTimer);
}
shop_btn.onclick = () => {
    clearTimeout(idleTimer);
    check_shop();
};