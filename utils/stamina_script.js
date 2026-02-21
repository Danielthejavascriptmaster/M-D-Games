export function stamina_checker(){
    let data = JSON.parse(localStorage.getItem("user"));
    let random_stamina_usage = Math.ceil(Math.random() * (15 - 5) + 5);
    let inventory = data.inventory;

    data.stamina -= random_stamina_usage;
    localStorage.setItem("user", JSON.stringify(data))

    if(data.stamina <= 0){
        window.alert("stamina ran out")
        if(inventory.includes("chair")){
            window.alert("using chair")
            data.inventory = data.inventory.filter(item => item !== "chair");
            data.stamina = 100
            localStorage.setItem("user", JSON.stringify(data))
        }else{
            window.alert("user doesnt have a chair")
            let random_fine = Math.ceil(Math.random() * (15 - 5) + 5);
            data.stamina = 50
            data.coins -= random_fine
            localStorage.setItem("user", JSON.stringify(data))

        }
    }
}