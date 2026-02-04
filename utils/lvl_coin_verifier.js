
export function checkLevelCoin(_level){
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(`data[_level] ${data[_level]} 1`)
    //if not collected
    if (data[_level] == false){
        data[_level] = true
        localStorage.setItem("user", JSON.stringify(data)); //save
        console.log(`data[_level] ${data[_level]} 2`)
        return "collected"// signal that coin has been collected 
    } else if (data[_level] == true){ //if it was collected
        return "already_collected" //return that the coin was collected
    };
}