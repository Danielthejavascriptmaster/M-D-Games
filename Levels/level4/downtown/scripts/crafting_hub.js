import { craft_item } from "../../../../utils/crafting_recipies.js";

const submit_btn = document.getElementById("submit");
const check_inventory_btn = document.getElementById("check_inventory_btn");
let inventory_label = document.getElementById("inventory_label");
let data = JSON.parse(localStorage.getItem("user"));

check_inventory_btn.onclick = () => {
    inventory_label.innerHTML = `${data.inventory}`
}

submit_btn.onclick = () => {
    const item_1 = document.getElementById("item_1").value;
    const item_2 = document.getElementById("item_2").value;

    craft_item(item_1, item_2);
    window.location.reload()
    inventory_label.innerHTML = `${data.inventory}`
}