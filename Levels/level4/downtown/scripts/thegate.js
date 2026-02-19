import { addCoin } from "/utils/add_coin.js";
import { checkLevelCoin } from "/utils/lvl_coin_verifier.js";
import { business_income, business_risk } from "/utils/business_income.js";
business_income()
business_risk()

const submit_btn = document.getElementById("submit");
const check_inventory_btn = document.getElementById("check_inventory_btn");
let inventory_label = document.getElementById("inventory_label");
let data = JSON.parse(localStorage.getItem("user"));

window.alert("The guard looks thirsty")
check_inventory_btn.onclick = () => {
    inventory_label.innerHTML = `${data.inventory}`
}

submit_btn.onclick = () => {
    const item_1 = document.getElementById("item_1").value;

    if(data.inventory.includes(item_1)){
        window.alert("user has item")
        if(item_1 == "pepsi max"){
            data.inventory = data.inventory.filter(item => item !== item_1);
            localStorage.setItem("user", JSON.stringify(data));
            
            let verify_result = checkLevelCoin("lvl4")
            console.log(verify_result)
            
            if(verify_result == "collected"){
                addCoin(5);
                window.location.replace("/Levels_S2/Level5/templates/level_5_base.html")
            }else
                {window.location.replace("/Levels_S2/Level5/templates/level_5_base.html");}
        }
        else if(item_1 == "water"){
            window.alert("The guard is looking for something more sweet")
        }
        else{
            window.alert("The guard didnt want it")
        }
    }
    else{
        window.alert("You dont have that item");
    };
}