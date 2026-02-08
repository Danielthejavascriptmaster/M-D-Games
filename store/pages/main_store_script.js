import { add_item } from "../../../utils/add_item_.Js";

console.log("Working")
const regular_water_buy_btn = document.getElementById("regular_water_buy_btn");
const green_card_buy_btn = document.getElementById("green_card_buy_btn");
const wires_buy_btn = document.getElementById("wires_buy_btn");
const building_permit_buy_btn = document.getElementById("building_permit_buy_btn");
const iron_bar_buy_btn = document.getElementById("iron_bar_buy_btn");
const chair_buy_btn = document.getElementById("chair_buy_btn");

const water_price = 2;
const green_card_price = 10;
const wires_price = 4;
const building_permit_price = 8;
const iron_bar_price = 4;
const chair_price = 5;

const brokie_text = "Get your money up not your funny up";
const purchase_text = "Purchase Complete";
let data = JSON.parse(localStorage.getItem("user"));
let coins = data.coins;

regular_water_buy_btn.onclick = () => {
    if (coins >= water_price){
        coins -= water_price;
        add_item("water")
        localStorage.setItem("user", JSON.stringify(data));
        window.alert(purchase_text);
    }else{
        window.alert(brokie_text)
    }
}

green_card_buy_btn.onclick = () => {
    if (coins >= green_card_price){
        coins -= green_card_price;
        add_item("green card")
        localStorage.setItem("user", JSON.stringify(data));
        window.alert(purchase_text);
    }else{
        window.alert(brokie_text)
    }   
}


wires_buy_btn.onclick = () => {
    if (coins >= wires_price){
        coins -= wires_price;
        add_item("wires")
        localStorage.setItem("user", JSON.stringify(data));
        window.alert(purchase_text);
    }else{
        window.alert(brokie_text)
    }
}


building_permit_buy_btn.onclick = () => {
    if (coins >= building_permit_price){
        coins -= building_permit_price;
        add_item("building permit")
        localStorage.setItem("user", JSON.stringify(data));
        window.alert(purchase_text);
    }else{
        window.alert(brokie_text)
    }
}


iron_bar_buy_btn.onclick = () => {
    if (coins >= iron_bar_price){
        coins -= iron_bar_price;
        add_item("iron bar")
        localStorage.setItem("user", JSON.stringify(data));
        window.alert(purchase_text);
    }else{
        window.alert(brokie_text)
    }
}


chair_buy_btn.onclick = () => {
    if (coins >= chair_price){
        coins -= chair_price;
        add_item("chair")
        localStorage.setItem("user", JSON.stringify(data));
        window.alert(purchase_text);
    }else{
        window.alert(brokie_text)
    }
}