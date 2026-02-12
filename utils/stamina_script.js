export function stamina_checker(){
    let data = JSON.parse(localStorage.getItem("user"));
    let user_stamina = data.stamina;
    let user_inventory = data.inventory;

    let random_energy_use = Math.ceil(Math() * (30 - 10) + 10);
    let new_stamina = user_stamina - random_energy_use;

    if (new_stamina <= 0){
        window.alert("Stamina has ran out")
        if(user_inventory.includes("chair")){
            window.alert("Using chair to rest")
            data.inventory = data.inventory.filter(item => item !== "chair");
        }
        else{
            window.alert("You got too tired and with no where to rest you shattered your ankle")
            let random_fine_rate = Math.ceil(Math.random() * (15 - 2) + 2);
            data.coins -= random_fine_rate
            localStorage.setItem("user", JSON.stringify(data))
        }
    }
};