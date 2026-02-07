import { add_item } from "../../../utils/add_item_.Js";

const add_item_btn = document.getElementById("add_item_btn");

add_item_btn.onclick = () => {
    add_item("apple")
}