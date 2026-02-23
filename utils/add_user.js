export function add_user(username){
    let user_data = {
    storage_username: username,
    coins: 0, 
    shop_unlocked: false,
    stamina: 100,

    //LEVELS COIN COLLECTOR
    // false means not collected
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,

    lvl3pt2_speech: false,

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
        fail_chance: 0,
        fail_messages:[],
        fine_low: 0,
        fine_high: 0,
    },

    achivements: {
        lazy_bum: false,
        shop_unlocked: false,
        theres_gulliable_written_on_the_ceiling: false,

    },

    save_levels: {
        level_5: true
    }
} 
    localStorage.setItem("user", JSON.stringify(user_data)); // saved item
}