import { addCoin } from "../../utils/add_coin.js";
import { checkLevelCoin } from "../../utils/lvl_coin_verifier.js";

console.log(localStorage)

const coin_label = document.getElementById("coin_label");
const correct_btn = document.getElementById("correct_btn");
let data = JSON.parse(localStorage.getItem("user"));
console.log(data);
coin_label.innerHTML = `coins: ${data.coins}`;

correct_btn.onclick = () => { 
    console.log("button has been clicked on level 1")
    let verify_result = checkLevelCoin("lvl1")
    console.log(verify_result)
    if(verify_result == false){
        addCoin(2)
        window.alert("coins would be added")
    }else{
        window.alert("coins have already been collected (greedy ahh)")
    }
};