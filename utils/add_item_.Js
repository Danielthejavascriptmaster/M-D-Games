export function add_item(item){
    let data = JSON.parse(localStorage.getItem("user"));

    data.inventory.push(item)
    localStorage.setItem("user", JSON.stringify(data))
    console.log(localStorage)
};