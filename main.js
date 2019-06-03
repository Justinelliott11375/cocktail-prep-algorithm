function drink(prepVessel, glassware, method, ice, garnish, muddleInsert, bittersDropper, syrup, juice, modifier, baseSpirit) {
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
    this.recipe = [this.muddleInsert, this.bittersDropper, this.syrup, this.juice, this.modifier, this.baseSpirit];

}

var manhattan = new drink("mixing glass", "coupe", "stir", null, "cherry and expressed orange peel", null, ["1 Dash Angostura Bitters", "1 Dash Orange Bitters"], null, null, ["1 oz Sweet Vermouth"], ["2 oz Rye Whiskey"]);
var martini = new drink("mixing glass", "coupe", "stir", null, "lemon peel", null, ["1 Dash Orange Bitters"], null, null, ["1 oz Dry Vermouth"], ["2 oz Gin"]);
var mojito = new drink("large shaker tin", "collins glass", "shake", "collins spear", ["mint sprig"], ["7-10 muddled mint leaves"], null, [".75 oz simple syrup"], [".75 oz lime juice"], null, ["2 oz light rum"]);
var vodkaSoda = new drink(null, "rocks glass", "build", "kold draft", "lime wedge");
var daiquiri = new drink("large shaker tin", "coupe", "shake", null, "lime wheel");

var orderArray = [manhattan, martini, mojito, vodkaSoda, daiquiri, manhattan];

function makeDrinkOrder(array) {
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
    console.log("Ingredients: ");
    for (let drinkIndex = 0; drinkIndex < array.length; drinkIndex++) {

        if (array[drinkIndex].method == "stir") {
            for (let groupIndex = 0; groupIndex < array[drinkIndex].recipe.length; groupIndex++) {
                if (array[drinkIndex].recipe[groupIndex] !== null) {
                    for (let ingredientIndex = 0; ingredientIndex < array[drinkIndex].recipe[groupIndex].length; ingredientIndex++) {
                        //console.log("k loop");
                        console.log("In " + array[drinkIndex].prepVessel + " " + (drinkIndex + 1) + " add " + array[drinkIndex].recipe[groupIndex][ingredientIndex]);
                    }
                }
            }
        }
    }

}