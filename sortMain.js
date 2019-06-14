function drink(prepVessel, glassware, method, ice, garnish) {
    this.prepVessel = prepVessel;
    this.glassware = glassware;
    this.method = method;
    this.ice = ice;
    this.garnish = garnish;
    this.recipe = null;
};

function ingredient(amount, unit, name, type) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
    this.type = type;
    this.drinkIndex = null;
}

muddleInsertArray = [];
bittersDropperArray = [];
syrupArray = [];
juiceArray = [];
modifierArray = [];
baseSpiritArray = [];
lengthenerArray = [];
//recipeArray = [muddleInsertArray, bitersDropperArray, syrupArray, juiceArray, modifierArray, baseSpiritArray, lengthenerArray];
var manhattan = new drink("mixing glass", "coupe", "stir", null, "cherry and expressed orange peel");
var martini = new drink("mixing glass", "coupe", "stir", null, "lemon peel");
var mojito = new drink("large shaker tin", "collins glass", "shake", "collins spear", "mint sprig");
var vodkaSoda = new drink(null, "rocks glass", "build", "kold draft", "lime wedge");
var daiquiri = new drink("large shaker tin", "coupe", "shake", null, "lime wheel");
var beesKnees = new drink("large shaker tin", "coupe", "shake", null, null);

manhattan.recipe = [new ingredient(2, "oz", "rye whiskey", "baseSpirit"), new ingredient(1, "oz", "sweet vermouth", "modifier"), new ingredient(1, "dash", "angostura bitters", "bittersDropper"), new ingredient(1, "dash", "orange bitters", "bittersDropper")];
mojito.recipe = [new ingredient("7-10", "leaves of", "mint", "muddlInsert"), new ingredient(.75, "oz", "simple syrup", "syrup"), new ingredient(.75, "oz", "lime juice", "juice"), new ingredient(2, "oz", "light rum", "baseSpirit"), new ingredient("2", "oz", "soda water", "lengthener")];
vodkaSoda.recipe = [new ingredient(1.5, "oz", "vodka", "baseSpirit"), new ingredient(null, null, "soda water")];
daiquiri.recipe = [new ingredient(.75, "oz", "simple syrup", "syrup"), new ingredient(.75, "oz", "lime juice", "juice"), new ingredient(2, "oz", "light rum", "baseSpirit")];
beesKnees.recipe = [new ingredient(.75, "oz", "honey syrup", "syrup"), new ingredient(.75, "oz", "lemon juice", "juice"), new ingredient(2, "oz", "gin", "baseSpirit")];
var orderArray = [manhattan, manhattan, martini, mojito, vodkaSoda, daiquiri];
var orderArrayTwo = [daiquiri, manhattan, mojito, beesKnees];

function makeDrinks(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].recipe.length; j++) {
            array[i].recipe[j].drinkIndex = i + 1;
            if (array[i].recipe[j].type === "muddleInsert") {
                muddleInsertArray.push(array[i].recipe[j]);
            } else if (array[i].recipe[j].type === "bittersDropper") {
                bittersDropperArray.push(array[i].recipe[j]);
            } else if (array[i].recipe[j].type === "syrup") {
                syrupArray.push(array[i].recipe[j]);
            } else if (array[i].recipe[j].type === "juice") {
                juiceArray.push(array[i].recipe[j]);
            } else if (array[i].recipe[j].type === "modifier") {
                modifierArray.push(array[i].recipe[j]);
            } else if (array[i].recipe[j].type === "baseSpirit") {
                baseSpiritArray.push(array[i].recipe[j]);
            } else {
                lengthenerArray.push(array[i].recipe[j]);
            }
        }
    }
}

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

pouredArray = [];

//remove lengtheners from build process!!!