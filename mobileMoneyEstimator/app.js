function estimateTransactionFee(amountToSend) {
    // initiallize fee avriable
    let fee;
    if (amountToSend * (1.5/100) < 10) {
        fee = 10
    } else if (amountToSend * (1.5/100) > 70) {
        fee = 70
    } else {
        fee = amountToSend * (1.5/100) < 10
    }

    console.log(`Sending KES ${amountToSend}:`)
    console.log(`Calculated Transaction Fee: KES ${fee}`)
    console.log(`Total amount to be debited: KES ${fee+amountToSend}`)
}

function processInput() {
    while (true) {
        const amount = prompt("Unatuma Ngapi? (KES):")

        // if the user closes the prompt
        if (amount === null) {
            return;
        }

        // convert the input from text to a number and validate
        const amountToSend = parseFloat(amount)
        if (isNaN(amount)) {
            estimateTransactionFee(amountToSend)
            return;
        }
    }
}

processInput();
