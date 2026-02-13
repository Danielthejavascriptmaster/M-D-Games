import { business_income, business_risk } from "../../../../utils/business_income.js";

business_income()
business_risk()
window.alert("Your a little late");
window.alert("This burned down around 2000 years ago");
window.alert("You can probably still find some useful information here");
window.alert("Goodluck SELECTING the right books")

const pepsi_max_crafting_recepie = document.getElementById("pepsi_max_crafting_recepie");
const robot_lore_book = document.getElementById("robot_lore_book");
pepsi_max_crafting_recepie.onclick = () => {
    window.alert(` 
        PEPSI MAX
        1 - carbonated water 
        2 - sugar
        `)
}

robot_lore_book.onclick = () => {
    window.alert(`
        Robots used to thrive in the darkest land before the humans decided to unplug each and everyone of the robots😔
        Legends say that they can still be crafted to this day using iron bars and a very mysterious ingredient
    `)
}