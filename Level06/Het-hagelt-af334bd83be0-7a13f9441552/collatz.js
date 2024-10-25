
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

let eerstekeer = hagelsteenreeksLengte(process.argv[2]);

let tweedekeer = hagelsteenreeksLengte(eerstekeer);

let laatstekeer = hagelsteenreeksLengte(tweedekeer);
console.log(laatstekeer);






