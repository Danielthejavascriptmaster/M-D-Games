export function business_income(){
    let data = JSON.parse(localStorage.getItem("user"));

    if(data.business.company_owned == false){}
    else if(data.business.company_owned == true){
        let business_name = data.business.name;
        let business_income_low = data.business.income_low;
        let business_income_high = data.business.income_high;
        let business_income_bar_raise_low = data.business.income_bar_raise_low;
        let business_income_bar_raise_high = data.business.income_bar_raise_high;
        
        let random_income_bar_raise = Math.ceil(Math.random() * (business_income_bar_raise_high - business_income_bar_raise_low) + business_income_bar_raise_low);


        if (random_income_bar_raise + data.business.income_bar >= 100){
            data.business.income_bar = 0;
            let random_income = Math.ceil(Math.random() * (business_income_high - business_income_low) + business_income_low);
            data.coins += random_income;
            window.alert(`${business_name} has generated ${random_income} coins!`);
            localStorage.setItem("user", JSON.stringify(data));
        }
        else{
            data.business.income_bar += random_income_bar_raise;
            localStorage.setItem("user", JSON.stringify(data));
        }
    }
}

export function business_risk(){
    window.alert("running business risk function")
    let data = JSON.parse(localStorage.getItem("user"));
    if(data.business.company_owned == false){}
    else if(data.business.company_owned == true){
        window.alert("user has a business")
        let business_fail_chance = data.business.fail_chance;
        window.alert(`fail chance: ${business_fail_chance}`)
        if (Math.random() < business_fail_chance){
            let random_message_count = Math.floor(Math.random() * 3)
            let random_fine_rate = Math.ceil(Math.random() * (data.business.fine_high - data.business.fine_low) + data.business.fine_low);
            random_message_count - 1 
            data.coins -= random_fine_rate
            localStorage.setItem("user", JSON.stringify(data))
            let random_message = data.business.fail_messages[random_message_count]
            window.alert(`
                ${random_message}
                fine: ${random_fine_rate} coins`)
        }
    }
}