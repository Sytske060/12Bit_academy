// Variabele declareren
let stad = process.argv;

// if-else statement op basis van tekstvariabele
if (stad[2] === "Amsterdam") {
    console.log(`De stad is ${stad[2]}
Het is de hoofdstad van Nederland`);
} else {
    console.log(`De stad is ${stad[2]}`);
}
