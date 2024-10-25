const inwonersaantallen = [10234, 34567, 12354, "29567", 55555, "23412", 52978];
const postcodes = ["10234", "10101", "34633", "29567", "55555", "23412", "33669"];
const plaatsnamen = [
    "Foobarstad",
    "Nieuw Foo",
    "Bardorp",
    "Barfoo",
    "Prodstad",
    "Developerdorp",
    "Nieuw developerdorp",
];

console.log("De plaatsen met inwonersaantallen als string zijn:");
let b;
for (b = 0; b < plaatsnamen.length; b++) {
    if (!Number.isInteger(inwonersaantallen[b])) {
        console.log(plaatsnamen[b]);
    }
}

let Postcode = 0;
for (let i = 0; i < postcodes.length; i++) {
    Postcode += Number(postcodes[i]);
}

console.log(`Het wachtwoord is: ${Postcode}`);

