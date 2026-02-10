import { add_item } from "../../../utils/add_item_.Js";
import { business_income } from "../../../../utils/business_income.js";

business_income()
const add_item_btn = document.getElementById("add_item_btn");

add_item_btn.onclick = () => {
    add_item("apple")
}