let sterren = process.argv[2];
let natuur = process.argv[3];
let autowegdek = process.argv[4];

console.log(`rating: ${sterren} sterren, natuurgebied: ${natuur}%, autowegdek: ${autowegdek} km`);

if (sterren >= 3 && natuur > 25) {
    console.log("belastingkorting voor de inwoners");
} else if (sterren >= 3 && natuur <= 25) {
    console.log("subsidie voor aanleg van meer natuur");
}

if (sterren != 3 && autowegdek > 200) {
    console.log("subsidie voor ombouwen autoweg naar fietsstraat");
} else if (sterren != 3 && autowegdek <= 200) {
    console.log("subsidie voor afvalinzameling");
}


