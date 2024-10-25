let uitgave = process.argv[2];
let uitgaveInGetal = parseInt(uitgave, 10);
let resultaat = uitgave % 3;
let antwoord = uitgave - resultaat;

console.log(`In totaal is er ${uitgaveInGetal} miljoen uitgegeven
De stad betaald ${uitgave % 3} miljoen
De gemeente betaald ${antwoord} miljoen`);