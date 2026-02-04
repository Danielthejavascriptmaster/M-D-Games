
export function checkLevelCoin(_level){
    let data = JSON.parse(localStorage.getItem("user"));
    let level_data = data[_level]

    //if not collected
    if (level_data == false){
        let new_level_data = true; //set to true (set to collected)
        localStorage.setItem("user", JSON.stringify(data)); //save
        return  false// signal that coin has been collected 
    } else if (level_data == true){ //if it was collected
        return true //return that the coin was collected
    };
}