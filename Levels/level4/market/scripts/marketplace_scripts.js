import { addCoin } from "../../../../utils/add_coin.js";
import { business_income } from "../../../../utils/business_income.js";

const info_button = document.getElementById("info_button");
const buy_btn_slot_1 = document.getElementById("buy_btn_slot_1");
const buy_btn_slot_2 = document.getElementById("buy_btn_slot_2");
const buy_btn_slot_3 = document.getElementById("buy_btn_slot_3");
const business_test = document.getElementById("business_test");

const sell_btn = document.getElementById("sell_btn");
const inf_money_btn = document.getElementById("inf_money_btn");

const soda_factory_cost = 30;
const banana_plantation = 10;
const crypto_trading_firm = 60;

let data = JSON.parse(localStorage.getItem("user"));

console.log(data)
const brokie_text = "Get your money up not your funny up"
buy_btn_slot_1.onclick = () => {
    //soda factory
    if(data.business.company_owned == false){
        if(data.coins >= soda_factory_cost){
            data.coins -= soda_factory_cost;
            data.business.company_owned = true;
            data.business.name = "Soda Factory";
            data.business.company_value = soda_factory_cost;
            data.business.income_low = 10;
            data.business.income_high = 15;

            data.business.income_bar = 0;

            data.business.income_bar_raise_low = 10;
            data.business.income_bar_raise_high = 60;

            localStorage.setItem("user", JSON.stringify(data));
            window.alert(`${data.business.name} has been bought!`);
            console.log(data);
        }else{
            window.alert(brokie_text);
        }
    } else if (data.business.company_owned == true){
        window.alert("a business is already owned ")
    }

}
buy_btn_slot_2.onclick = () => {
    //banana plantation
    if(data.business.company_owned == false){
        if(data.coins >= banana_plantation){
            data.coins -= banana_plantation;
            data.business.company_owned = true;
            data.business.name = "Soda Factory";
            data.business.company_value = banana_plantation;
            data.business.income_low = 3;
            data.business.income_high = 10;

            data.business.income_bar = 0;

            data.business.income_bar_raise_low = 25;
            data.business.income_bar_raise_high = 75;

            localStorage.setItem("user", JSON.stringify(data));
            window.alert(`${data.business.name} has been bought!`);
            console.log(data);
        }else{
            window.alert(brokie_text);
        }
    } else if (data.business.company_owned == true){
        window.alert("a business is already owned ")
    }
}
buy_btn_slot_3.onclick = () => {
    //crypto trading firm
    if(data.business.company_owned == false){
        if(data.coins >= crypto_trading_firm){
            data.coins -= crypto_trading_firm;
            data.business.company_owned = true;
            data.business.name = "Soda Factory";
            data.business.company_value = crypto_trading_firm;
            data.business.income_low = 3;
            data.business.income_high = 10;

            data.business.income_bar = 0;

            data.business.income_bar_raise_low = 25;
            data.business.income_bar_raise_high = 75;

            localStorage.setItem("user", JSON.stringify(data));
            window.alert(`${data.business.name} has been bought!`);
            console.log(data);
        }else{
            window.alert(brokie_text);
        }
    } else if (data.business.company_owned == true){
        window.alert("a business is already owned ")
    }
}

business_test.onclick = () => {
    window.alert("working");
    business_income();
}
info_button.onclick = () => {
    window.alert("You Can Buy A Business In The Marketplace To Gain More Income");
    window.alert("Maintenence is needed sometimes you business might fail");
}
inf_money_btn.onclick = () => {
    addCoin(1000);
    console.log(data);
}

sell_btn.onclick = () => {
    if(data.business.company_owned == true){
        window.alert("Business has been sold")
        let refund_money = data.business.company_value / 2;
        data.coins += refund_money;
        window.alert(`Refunding ${refund_money} coins`)

        //resets
        data.business.company_owned = false;
        data.business.name = "";
        data.business.company_value = 0;
        data.business.income_low = 0;
        data.business.income_high = 0;

        data.business.income_bar = 0;

        data.business.income_bar_raise_low = 0;
        data.business.income_bar_raise_high = 0;

        localStorage.setItem("user", JSON.stringify(data))
        console.log(data)
    }else if(data.business.company_owned == false){
        console.log("No business owned")
        window.alert("No business owned")
    }
}