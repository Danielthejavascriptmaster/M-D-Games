import { business_income, business_risk } from "../../../../utils/business_income.js";
import { stamina_checker} from "../../../../utils/stamina_script.js"
let coin_stat = document.getElementById("coin-stat-label");
let inventory_stat = document.getElementById("inventory-stat-label");
let stamina_stat = document.getElementById("stamina-stat-label");

let data = JSON.parse(localStorage.getItem("user"));
coin_stat.innerHTML = `Coins: ${data.coins}`
inventory_stat.innerHTML = `Inventory: ${data.inventory}`
stamina_stat.innerHTML = `Stamina: ${data.stamina}`

business_income()
business_risk()
stamina_checker()




data.save_levels.level_5 == true
localStorage.setItem("user", JSON.stringify(data))