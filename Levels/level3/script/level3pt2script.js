import { business_income, business_risk } from "../../../../utils/business_income.js";
business_income()
business_risk()
let data = JSON.parse(localStorage.getItem("user"));
console.log(localStorage)

const view_btn = document.getElementById("view_btn");

data.shop_unlocked = true;
localStorage.setItem("user", JSON.stringify(data));

window.alert("You made it to level 3");
window.alert("I didn't expect you to make it this far");
window.alert(`Looks like you have gathered ${data.coins} coins`);
window.alert("Try spending them in the shop");
window.alert("I gave you access to the shop, click the view button to return to the main page");

view_btn.onclick = () => {
    window.location.replace('/main_menu/html/MainMenu.html');
}
coin_label.innerHTML = `coins: ${data.coins}`