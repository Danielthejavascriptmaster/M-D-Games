import { addCoin } from "../../utils/add_coin.js";
const coin_label = document.getElementById("coin_label");
let data = JSON.parse(localStorage.getItem("user"))
coin_label.innerHTML = `coins: ${data.coins}`