import { addCoin } from "../../utils/add_coin.js";
console.log(localStorage)
const coin_label = document.getElementById("coin_label");
let data = JSON.parse(localStorage.getItem("user"))
coin_label.innerHTML = `coins: ${data.coins}`