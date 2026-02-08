import { add_item } from "../../../utils/add_item_.Js";

let inventory_label = document.getElementById("inventory");
const add_item_btn = document.getElementById("add_item_btn");
let data = JSON.parse(localStorage.getItem("user"));

add_item_btn.onclick = () => {
    add_item("apple");
    location.reload()
}

inventory_label.innerHTML = `${data.inventory}`


