export function business_income(){
    let data = JSON.parse(localStorage.getItem("user"));

    if(data.business.company_owned == false){}
    else if(data.business.company_owned == true){
        let business_name = data.business.name;
        let business_income_low = data.business.income_low;
        let business_income_high = data.business.income_high;
        let business_income_bar_raise_low = data.business.income_bar_raise_low;
        let business_income_bar_raise_high = data.business.income_bar_raise_high;

        let coins = data.coins
        
        let random_income_bar_raise = Math.ceil(Math.random() * (business_income_bar_raise_high - business_income_bar_raise_low) + business_income_bar_raise_low);

        let new_income_bar = random_income_bar_raise + data.business.income_bar;

        if (data.business.income_bar >= 100){
            data.business.income_bar = 0;
            let random_income = Math.ceil(Math.random() * (business_income_high - business_income_low) + business_income_low);
            coins += random_income;
            window.alert(`${business_name} has generated ${random_income} coins!`);
            localStorage.setItem("user", JSON.stringify(data));
        }
        else{
            data.business.income_bar = new_income_bar;
            localStorage.setItem("user", JSON.stringify(data));
        }
    }
}