let ores = document.getElementById("ores_label");
let mine_btn = document.getElementById("mine_btn");
let coin_label =document.getElementById("coin_label");
let data = JSON.parse(localStorage.getItem("user"));

coin_label.innerHTML = `coins: ${data.coins}`

mine_btn.onclick = () => {
    let roll = Math.random()
    if(roll < 0.7){
        window.alert("Rock found")
    }
    else if(roll < 0.95){
        window.alert("Gem Found")
        data.coins += 0.2
        localStorage.setItem("user", JSON.stringify(data))
        window.location.reload()
    }else{
        window.alert("Diamond Found")
        data.coins += 5  
        localStorage.setItem("user", JSON.stringify(data))
        window.location.reload()
    }
}
