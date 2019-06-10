function drink(prepVessel, glassware, method, ice, garnish, muddleInsert, bittersDropper, syrup, juice, modifier, baseSpirit, lengthener) {
    this.prepVessel = prepVessel;
    this.glassware = glassware;
    this.method = method;
    this.ice = ice;
    this.garnish = garnish;
    this.muddleInsert = muddleInsert;
    this.bittersDropper = bittersDropper;
    this.syrup = syrup;
    this.juice = juice;
    this.modifier = modifier;
    this.baseSpirit = baseSpirit;
    this.lengthener = lengthener;
    this.recipe = [this.muddleInsert, this.bittersDropper, this.syrup, this.juice, this.modifier, this.baseSpirit, this.lengthener];

};

function ingredient(amount, unit, name) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
}

var newDrink = new drink(null, null, null, null, null, [], [], [], [], [], [], []);
newDrink.bittersDropper[0] = new ingredient(.75, "oz", "lemon juice");
newDrink.bittersDropper[1] = new ingredient(.75, "oz", "lime juice");
var manhattan = new drink("mixing glass", "coupe", "stir", null, "cherry and expressed orange peel", null, ["1 Dash Angostura Bitters", "1 Dash Orange Bitters"], null, null, ["1 oz Sweet Vermouth"], ["2 oz Rye Whiskey"], null);
var martini = new drink("mixing glass", "coupe", "stir", null, "lemon peel", null, ["1 Dash Orange Bitters"], null, null, ["1 oz Dry Vermouth"], ["2 oz Gin"], null);
var mojito = new drink("large shaker tin", "collins glass", "shake", "collins spear", ["mint sprig"], ["7-10 muddled mint leaves"], null, [".75 oz simple syrup"], [".75 oz lime juice"], null, ["2 oz light rum"], ["Soda water"]);
var vodkaSoda = new drink(null, "rocks glass", "build", "kold draft", "lime wedge", null, null, null, null, null, ["1.5 oz Vodka"], ["Soda water"]);
var daiquiri = new drink("large shaker tin", "coupe", "shake", null, "lime wheel", null, null, [".75 oz simple syrup"], [".75 oz lime juice"], null, ["2 oz light rum"], null);

var orderArray = [manhattan, manhattan, martini, mojito, vodkaSoda, daiquiri];

function makeDrinkOrder(array) {
    //start timer here
    var groupCounter = 0;
    console.log("Mise en place: ")
    for (let i = 0; i < array.length; i++) {
        if (array[i].prepVessel !== null && array[i].glassware == "coupe") {
            console.log(array[i].prepVessel);
        } else if (array[i].prepVessel !== null && array[i].glassware !== "coupe") {
            console.log(array[i].prepVessel + " and " + array[i].glassware);
        } else {
            console.log(array[i].glassware);
        }
    }
    var drinkLoopCounter = 0;
    var ingredientGroupCounter = 0;
    var ingredientLoopCounter = 0;
    console.log("Ingredients: ");
    for (let drinkIndex = 0; drinkIndex < array.length; drinkIndex++) {
        //drinkLoopCounter += 1;
        //console.log("drinkLoopCounter: " + drinkLoopCounter);
        if (array[drinkIndex].method == "stir") {
            for (let groupIndex = 0; groupIndex < array[drinkIndex].recipe.length; groupIndex++) {
                //ingredientGroupCounter += 1;
                //console.log("ingredientGroupCounter: " + ingredientGroupCounter); 
                if (array[drinkIndex].recipe[groupIndex] !== null) {
                    for (let ingredientIndex = 0; ingredientIndex < array[drinkIndex].recipe[groupIndex].length; ingredientIndex++) {
                        //console.log("k loop");
                        //ingredientLoopCounter += 1;
                        //console.log("ingredientLoopCounter: " + ingredientLoopCounter);
                        console.log("In " + array[drinkIndex].prepVessel + " at position " + (drinkIndex + 1) + " add " + array[drinkIndex].recipe[groupIndex][ingredientIndex]);
                        /*for(let j = drinkIndex+1; j < array.length; j++){
                          console.log("next drink: " + array[drinkIndex+1].recipe[groupIndex][ingredientIndex]);
                          console.log("current drink: " + array[drinkIndex].recipe[groupIndex][ingredientIndex]);
                          if(array[j].recipe[groupIndex][ingredientIndex].includes(array[drinkIndex].recipe[groupIndex][ingredientIndex])){
                            console.log("yes");
                          };
                        }*/
                    }
                }
            }
        }
        if (array[drinkIndex].method !== "stir") {
            for (let groupIndex = 0; groupIndex < array[drinkIndex].recipe.length; groupIndex++) {
                //ingredientGroupCounter += 1;
                //console.log("ingredientGroupCounter: " + ingredientGroupCounter); 
                if (array[drinkIndex].recipe[groupIndex] !== null) {
                    for (let ingredientIndex = 0; ingredientIndex < array[drinkIndex].recipe[groupIndex].length; ingredientIndex++) {
                        //ingredientLoopCounter += 1;
                        //console.log("ingredientLoopCounter: " + ingredientLoopCounter);
                        console.log("In " + array[drinkIndex].prepVessel + " at position " + (drinkIndex + 1) + " add " + array[drinkIndex].recipe[groupIndex][ingredientIndex]);
                        /*for(let j = drinkIndex+1; j < array.length; j++){
                          console.log("next drink: " + array[drinkIndex+1].recipe[groupIndex][ingredientIndex]);
                          console.log("current drink: " + array[drinkIndex].recipe[groupIndex][ingredientIndex]);
                          if(array[j].recipe[groupIndex][ingredientIndex].includes(array[drinkIndex].recipe[groupIndex][ingredientIndex])){
                            console.log("yes");
                          };
                        }*/
                    }
                }
            }
        }
    }

}

//remove lengtheners from build process!!!