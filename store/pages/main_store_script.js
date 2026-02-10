import { add_item } from "../../../utils/add_item_.Js";
2
const regular_water_buy_btn = document.getElementById("regular_water_buy_btn");
const green_card_buy_btn = document.getElementById("green_card_buy_btn");
const wires_buy_btn = document.getElementById("wires_buy_btn");
const building_permit_buy_btn = document.getElementById("building_permit_buy_btn");
const iron_bar_buy_btn = document.getElementById("iron_bar_buy_btn");
const chair_buy_btn = document.getElementById("chair_buy_btn");
const coin_label = document.getElementById("coin_label");

const water_price = 2;
const green_card_price = 10;
const wires_price = 4;
const building_permit_price = 8;
const iron_bar_price = 4;
const chair_price = 5;

const brokie_text = "Get your money up not your funny up";
const purchase_text = "Purchase Complete";
let data = JSON.parse(localStorage.getItem("user"));

function buy_item(item_price, item_name){
    if (data.coins >= item_price){
        data.coins -= item_price;
        localStorage.setItem("user", JSON.stringify(data));
        add_item(item_name)
        window.alert(purchase_text);
        location.reload()
    }else{
        window.alert(brokie_text)
    }
}
coin_label.innerHTML = `Coins: ${data.coins}`
regular_water_buy_btn.onclick = () => {
    buy_item(water_price, "water");
}

green_card_buy_btn.onclick = () => {
    buy_item(green_card_price, "green card");
}

wires_buy_btn.onclick = () => {
    buy_item(wires_price, "wires");
}

building_permit_buy_btn.onclick = () => {
    buy_item(building_permit_price, "building permit");
}

iron_bar_buy_btn.onclick = () => {
    buy_item(iron_bar_price, "iron bar");
}

chair_buy_btn.onclick = () => {
    buy_item(chair_price, "chair");
}