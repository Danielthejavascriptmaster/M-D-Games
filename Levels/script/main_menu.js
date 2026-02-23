import { add_user } from "../../utils/add_user.js";
import { check_shop } from "../../utils/check_shop_perm.js"

let developer_debug_button = document.getElementById("credit_label");
const shop_btn = document.getElementById("shop_btn");

window.onload = () => {
    setTimeout(() => {
        window.alert("What are you waiting for? Get to work!");
    }, 10000);
}

if(!localStorage.getItem("hasRun")){ //if false/if it hasnt ran yet
    localStorage.setItem("hasRun", "yes");

    window.alert("Thanks for joining")
    window.alert("This website is not meant for mobile")
    window.alert("Attempting to play on mobile might lead to bugs or bad UI")
    window.alert("This release was rushed because the devs were bored")
    window.alert("Clicking 'omib games' will reset all progress")
    let username = window.prompt("Set Your Username:");
    add_user(username);
}else if(localStorage){};

developer_debug_button.onclick = () => {
    localStorage.clear();
    window.alert("This resets all progress");
};

shop_btn.onclick = () => {
    check_shop();
};