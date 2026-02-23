import { business_income, business_risk } from "../../../../utils/business_income.js";
import { stamina_checker } from "../../../../utils/stamina_script.js"
business_income()
business_risk()
stamina_checker()

window.alert("Hey, looks like you have made it to the 5th level, im happy that u made it this far. unfortunately there is no more content in the game left, the devs will hopefully update soon")
let coin_stat = document.getElementById("coin-stat-label");
let inventory_stat = document.getElementById("inventory-stat-label");
let stamina_stat = document.getElementById("stamina-stat-label");

let data = JSON.parse(localStorage.getItem("user"));

localStorage.setItem("user", JSON.stringify(data))
stamina_stat.innerHTML = `Stamina: ${data.stamina}`
coin_stat.innerHTML = `Coins: ${data.coins}`
inventory_stat.innerHTML = `Inventory: ${data.inventory}`


data.save_levels.level_5 == true
localStorage.setItem("user", JSON.stringify(data))