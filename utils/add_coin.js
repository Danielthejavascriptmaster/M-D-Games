export function addCoin(_reward_amount){
    let data = JSON.parse(localStorage.getItem("user"));
    data.coins += _reward_amount
    
    localStorage.setItem("user", JSON.stringify(data));
}
