export function addCoin(reward_amount, level){
    let retrieved_data = JSON.parse(localStorage.getItem("user"));
    retrieved_data.coins += reward_amount
    
    localStorage.setItem("user", JSON.stringify(retrieved_data))
    
    console.log(`COIN AMOUNT: ${retrieved_data.coins}`);
}