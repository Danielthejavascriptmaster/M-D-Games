export function add_user(username){
    let user_data = {
    "storage_username": username,
    "coins": 0, 
    "shop_unlocked": false,
    "stamina": 100,

    //LEVELS COIN COLLECTOR
    // false means not collected
    "lvl1": false,
    "lvl2": false,
    "lvl3": false,

    "inventory": [],

    "business": {
        "name": "",
        "income_low": 0,
        "income_high": 0,
        "income_bar": 0,
        "income_bar_raise": 0
    }
} 
    localStorage.setItem("user", JSON.stringify(user_data)); // saved item
}