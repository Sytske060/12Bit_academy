function hagelsteenreeksLengte(inputGetal) {
    let stappen = 0;
    let getal = inputGetal;

    while (getal !== 1) {
        if (getal % 2 === 0) {
            getal /= 2;
        } else {
            getal = 3 * getal + 1;
        }
        stappen++;
    }

    return stappen;
}

// Functie aanroepen met het oorspronkelijke getal
const eersteResultaat = hagelsteenreeksLengte(process.argv[2], 10);
console.log(`Aantal stappen voor input: ${eersteResultaat}`);
