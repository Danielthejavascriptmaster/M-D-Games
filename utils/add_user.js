export function add_user(username){
    let user_data = {
    "storage_username": username,
    "coins": 0, 
    "shop_unlocked": false,

    //LEVELS COIN COLLECTOR
    // false means not collected
    "lvl1": false,
    "lvl2": false,
    "lvl3": false,
} 
    localStorage.setItem("user", JSON.stringify(user_data)); // saved item
}