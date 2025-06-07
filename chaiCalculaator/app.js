function calculateChaiIngredients(numberOfCups) {
    // in ml
    var waterAmount = 600 * numberOfCups;
    var milkAmount = 150 * numberOfCups;

    //in tablespoons
    var teaLeavesAmount = 3 * numberOfCups;
    var sugarAmount = 6 * numberOfCups;

    const plural = () => {
        if (numberOfCups === 1) {
            "s";
        } else {
            "";
        }
    }
    console.log(`
To make ${numberOfCups} cup${plural()} of Kenyan Chai, you will need:
Water: ${waterAmount}
Milk: ${milkAmount}
Tea Leaves (Majani): ${teaLeavesAmount} tablespoons
Sugar (Sukari): ${sugarAmount} tablespoons

Enjoy your Chai Bora!
`);
}

function processInput() {
    while (true) {
        const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
        
        // If the user cancels, exit the loop
        if (input === null) {
            return;
        }
        
        const number = parseFloat(input);
        
        if (isNaN(number)) {
            alert("Numbers only please");
        } else {
            calculateChaiIngredients(number);
            return;
        }
    }
}

processInput();
