import { addCoin } from "../../utils/add_coin.js";
import { checkLevelCoin } from "../../utils/lvl_coin_verifier.js";
import { business_income, business_risk } from "../../../../utils/business_income.js";
business_risk()
business_income()
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

    if(verify_result == "collected"){
        addCoin(5)
    }else{
    }
};