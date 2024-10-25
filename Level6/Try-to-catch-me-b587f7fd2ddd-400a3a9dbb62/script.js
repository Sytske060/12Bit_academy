function dagVanDeWeek(dagGetal) {
    let dagen = [
        "Maandag",
        "Dinsdag",
        "Woensdag",
        "Donderdag",
        "Vrijdag",
        "Zaterdag",
        "Zondag",
    ];

    try {
        if (typeof dagGetal !== 'number' || dagGetal < 1 || dagGetal > 6) {
            throw new Error('Geen geldige dag!');
        }

        return dagen[dagGetal];
    } catch (error) {
        return error.message;
    }
}

const testWaardes = [3, "onbekend", -2, 7, 2, 8, 4];

testWaardes.forEach((getal) => {
    console.log(dagVanDeWeek(getal));
});
