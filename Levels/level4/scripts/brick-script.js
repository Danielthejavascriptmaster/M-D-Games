let inventory_label = document.getElementById("inventory");
let data = JSON.parse(localStorage.getItem("user"));

console.log(data)
inventory_label.innerHTML = `${data.inventory}`


