let GemiddeldeTemp = process.argv[2];
let TotaaleNeerslag = process.argv[3];
let LaagsteTemperatuur = process.argv[4];

let GTemp = parseInt(GemiddeldeTemp, 10);
let Neerslag = parseInt(TotaaleNeerslag, 10);
let LTemp = parseInt(LaagsteTemperatuur, 10);

console.log(`gemiddelde temperatuur: ${GTemp} graden, neerslag: ${Neerslag} ml, laagste temperatuur ${LTemp} graden`);

// Gemiddelde temperatuur is meer dan 20
// Neerslag is lager dan 750
// Als beide waar zijn dan is het een warm land
if (console.log(`Het land is een warm land: ${GTemp > 20 && Neerslag < 750}`));


// De laagste temperatuur was afgelopen jaar onder 10 graden
// als dat niet waar is dan is het warm land
else if (!(LTemp < 10)) {
    console.log(`Het land is een warm land: True`);


    // De gemiddelde temperatuur is minder dan 25 graden
    // als dat niet waar is dan is het warm land
} else if (!(GTemp < 25)) {
    console.log(`Het land is een warm land: True`);
}

// Het land is een warm land: ${GTemp >= 20 && Neerslag <= 750 || LTemp <= 10 || GTemp <= 25}`);


