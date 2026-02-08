import { addCoin } from "../../../utils/add_coin.js";
import { checkLevelCoin } from "../../../utils/lvl_coin_verifier.js";

console.log(localStorage)
const coin_label = document.getElementById("coin_label");

let data = JSON.parse(localStorage.getItem("user"))
let checkbox_1 = document.getElementById("CB1"); //on
let checkbox_2 = document.getElementById("CB2"); //off
let checkbox_3 = document.getElementById("CB3"); //off
let checkbox_4 = document.getElementById("CB4"); //on
let checkbox_5 = document.getElementById("CB5"); //on
let submit_btn = document.querySelector(".submit_button");
//All check boxes


//sequence: 1 0 0 1 1

submit_btn.onclick = () => {
    if (
        checkbox_1.checked == true &&
        checkbox_2.checked == false && 
        checkbox_3.checked == false && 
        checkbox_4.checked == true &&
        checkbox_5.checked == true
    )
    {
        let verify_result = checkLevelCoin("lvl3")
        console.log(verify_result)

        if(verify_result == "collected"){
            addCoin(5);
            window.location.replace("/Levels/level3/level-3-part2.html")
        }else
        {
            window.location.replace("/Levels/level3/level-3-part2.html");

        }
    }
    else{
        window.alert("incorrect sequence");
    }
}

coin_label.innerHTML = `coins: ${data.coins}`

