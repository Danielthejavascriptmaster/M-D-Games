import { add_user } from "../../utils/add_user.js";
let developer_debug_button = document.getElementById("credit_label");

if(!localStorage.getItem("hasRun")){ //if false/if it hasnt ran yet
    localStorage.setItem("hasRun", "yes");

    let username = window.prompt("Set Your Username:");
    add_user(username)
}else if(localStorage){
}

developer_debug_button.onclick = () => {
    localStorage.clear()
    window.alert("This resets all progress")
}
