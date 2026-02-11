import { add_item } from "../../../utils/add_item_.Js";
import { business_income } from "../../../../utils/business_income.js";

business_income()
const add_item_btn = document.getElementById("add_item_btn");
let list = [1, 2, 4, 6]
add_item_btn.onclick = () => {
    window.alert(list);
    let new_list = JSON.stringify(list);
    window.alert(new_list)
}