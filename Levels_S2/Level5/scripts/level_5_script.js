import { business_income, business_risk } from "../../../../utils/business_income.js";
business_income()
business_risk()

let data = JSON.parse(localStorage.getItem("user"));
data.save_levels.level_5 == true
localStorage.setItem("user", JSON.stringify(data))