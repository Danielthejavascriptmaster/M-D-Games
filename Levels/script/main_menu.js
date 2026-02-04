import { add_user } from "../../utils/add_user.js";
let developer_debug_button = document.getElementById("credit_label");

if(!localStorage.getItem("hasRun")){ //if false/if it hasnt ran yet
    console.log(`Falsely ${localStorage}`)
    console.log("hasRun has been detected as falsey")
    localStorage.setItem("hasRun", "yes");

    let username = window.prompt("Set Your Username:");
    add_user(username)
}else if(localStorage){
}

developer_debug_button.onclick = () => {
    localStorage.removeItem("hasRun")
    window.alert("This is a developer button meant for debugging, It does not affect gameplay")
}
