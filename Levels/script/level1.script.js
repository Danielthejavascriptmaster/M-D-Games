import { addCoin } from "../../utils/add_coin.js";

console.log(localStorage)

const coin_label = document.getElementById("coin_label");
const correct_btn = document.getElementById("correct_btn");

let data = JSON.parse(localStorage.getItem("user"))

coin_label.innerHTML = `coins: ${data.coins}`;

correct_btn.onclick = () => { 
    addCoin(2); //? 2 coin reward

};