const submit_btn = document.getElementById("submit");
const check_inventory_btn = document.getElementById("check_inventory_btn");
let inventory_label = document.getElementById("inventory_label");
let data = JSON.parse(localStorage.getItem("user"));

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
            window.alert("Redircting to levle 5")
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