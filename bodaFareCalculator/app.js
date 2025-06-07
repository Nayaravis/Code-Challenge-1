function calculateBodaFare(distanceInKm) {
    // in KES
    const baseFare = 50;
    const chargePerKm = 15;

    const totalFare = baseFare + (distanceInKm * chargePerKm);
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`)
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`)
    console.log(`Total: KES ${totalFare}\n\nPanda Pikipiki!`);
}

function processInput() {
    while (true) {
        const distance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

        if (distance === null) {
            return;
        }

        const convertedDistance = parseFloat(distance);

        if (isNaN(convertedDistance)) {
            alert("Hizo ni gani tena??");
        } else {
            calculateBodaFare(convertedDistance);
            return;
        }
    }
}

processInput()