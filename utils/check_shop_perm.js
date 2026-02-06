

export function check_shop(){
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage)
    if(data.shop_unlocked == true){
        window.location.replace("/store/pages/main_store.html");
    }else{
        window.alert("No Access");
    }
};