import { business_income } from "../../../../utils/business_income.js";
business_income()
const check_inventory_btn = document.getElementById("check_inventory_btn");
let inventory_label = document.getElementById("inventory");
let data = JSON.parse(localStorage.getItem("user"));

check_inventory_btn.onclick = () => {
    inventory_label.innerHTML = `${data.inventory}`
}