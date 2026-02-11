export function add_user(username){
    let user_data = {
    storage_username: username,
    coins: 100000, 
    shop_unlocked: false,
    stamina: 100,

    //LEVELS COIN COLLECTOR
    // false means not collected
    lvl1: false,
    lvl2: false,
    lvl3: false,

    inventory: [],

    business: {
        company_owned: false,
        name: "",
        income_low: 0,
        income_high: 0,
        income_bar: 0,
        income_bar_raise_low: 0,
        income_bar_raise_high: 0,
        income_bar_value: 0,
        company_value: 0,
    },

    achivements: {
        lazy_bum: false,
        shop_unlocked: false
    }
} 
    localStorage.setItem("user", JSON.stringify(user_data)); // saved item
}