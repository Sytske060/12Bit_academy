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
        if (typeof dagGetal !== 'number' || dagGetal < 0 || dagGetal > 6 || !Number.isInteger(dagGetal)) {
            throw new Error('Geen geldige dag!');
        }

        return dagen[dagGetal];
    } catch (error) {
        return error.message;
    }
}

const array = [3, "onbekend", -2, 7, 2, 8, 4];
const outputContainer = document.getElementById('output-container');

array.forEach((getal) => {
    let result = dagVanDeWeek(getal);
    let outputElement = document.createElement('div');

    if (result === 'Geen geldige dag!') {
        outputElement.classList.add('red-text');
    } else {
        outputElement.classList.add('green-text');
    }

    outputElement.textContent = result;
    outputContainer.appendChild(outputElement);
});

