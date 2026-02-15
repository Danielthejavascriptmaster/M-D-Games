import { business_income, business_risk } from "../../../../utils/business_income.js";
business_income()
business_risk()
const level_5_btn = document.getElementById("level_5_btn");
let data = JSON.parse(localStorage.getItem("user"));

level_5_btn.onclick = () => {
    if(data.save_levels.level_5 == true){
        location.replace("/Levels_S2/Level5/templates/level_5_base.html")
    }else if(data.save_levels.level_5 == false){
        window.alert("Get to the level first😹")
    }
}