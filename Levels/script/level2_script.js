import { addCoin } from "../../utils/add_coin.js";
import { checkLevelCoin } from "../../utils/lvl_coin_verifier.js";
console.log(localStorage)
let data = JSON.parse(localStorage.getItem("user"));

const coin_label = document.getElementById("coin_label");
coin_label.innerHTML = `coins: ${data.coins}`

const continue_button = document.getElementById("continue_button");
const response_label = document.getElementById("response_label");
const next_level_btn = document.getElementById("next_level");

continue_button.onclick = () => {
    response_label.innerHTML = "01110011 01100011 01110010 01101111 01101100 01101100 00100000 01100100 01101111 01110111 01101110 00101100 00100000 01100010 01101111 01110100 01110100 01101111 01101101 00100000 01101100 01100101 01100110 01110100"
};

next_level_btn.onclick = () => {
    console.log("button has been clicked on level 1")
    let verify_result = checkLevelCoin("lvl2")
    console.log(verify_result)
    if(verify_result == "collected"){
        addCoin(2)
    }else{
    }
};