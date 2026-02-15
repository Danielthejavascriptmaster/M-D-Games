let total_recipies = 9;
let crafting_recipies = [
    {
        ingredients: ["carbonated water", "sugar"],
        output: "pepsi max",
    },
    {
        ingredients: ["wires", "water"],
        output: "electricity"
    },
    {
        ingredients: ["electricity", "iron bar"],
        output: "taser"
    },
    {
        ingredients: ["water", "chair"],
        output: "wet chair",
    }, 
    {
        ingredients: ["wet chair", "electricity"],
        output: "electric chair trap",
    },
    {
        ingredients: ["wires", "iron bar"],
        output: "robot",
    },
    {
        ingredients: ["robot", "pepsi max"],
        output: "strongest robot",
    },
    {
        ingredients: ["robot", "iron bar"],
        output: "dark robot",
    },
    {
        ingredients: ["robot", "electricity"],
        output: "electro robot",
    },
]

export function craft_item(ingredient_1, ingredient_2){
    let data = JSON.parse(localStorage.getItem("user"));
    let inventory = data.inventory


    for (let item_number = 0; item_number < total_recipies; item_number++) {
        if(inventory.includes(ingredient_1) && inventory.includes(ingredient_2)){
            let user_ingredients = [ingredient_1, ingredient_2];
            if(JSON.stringify(user_ingredients) == JSON.stringify(crafting_recipies[item_number].ingredients)){
                data.inventory = data.inventory.filter(item => item !== ingredient_1);
                data.inventory = data.inventory.filter(item => item !== ingredient_2);

                data.inventory.push(crafting_recipies[item_number].output);  
                window.alert(`${crafting_recipies[item_number].output} has been crafted`);
                localStorage.setItem("user", JSON.stringify(data))
            }
            else{
            }
        }
        else{
        }
    }
}