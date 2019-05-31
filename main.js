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

}

var manhattan = new drink("mixing glass", "coupe", "stir", null, "cherry and expressed orange peel", null, ["1 Dash Angostura Bitters", "1 Dash Orange Bitters"], null, null, ["1 oz Sweet Vermouth"], ["2 oz Rye Whiskey"]);
var martini = new drink("mixing glass", "coupe", "stir", null, "lemon peel", ["1 Dash Orange Bitters", "1 oz Dry Vermouth", "2 oz Gin"]);
var mojito = new drink("large shaker tin", "collins glass", "shake", "collins spear", "mint sprig");
var vodkaSoda = new drink(null, "rocks glass", "build", "kold draft", "lime wedge");
var daiquiri = new drink("large shaker tin", "coupe", "shake", null, "lime wheel");

var orderArray = [manhattan, martini, mojito, vodkaSoda, daiquiri];

function makeDrinkOrder(array) {
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
    for (let i = 0; i < array.length; i++) {
        if (array[i].method == "stir") {
            console.log("In " + array[i].prepVessel + " " + (i + 1) + " add " + array[i].recipe[0]);
        }
    }

}