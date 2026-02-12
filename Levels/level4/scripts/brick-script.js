import { business_income, business_risk } from "../../../../utils/business_income.js";
business_risk()
business_income()
const check_inventory_btn = document.getElementById("check_inventory_btn");
let inventory_label = document.getElementById("inventory");
let data = JSON.parse(localStorage.getItem("user"));

check_inventory_btn.onclick = () => {
    inventory_label.innerHTML = `${data.inventory}`
}