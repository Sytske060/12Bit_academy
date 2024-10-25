if (process.argv.length <= 2) {
    console.log('Voer ten minste één boodschap in.');
    process.exit(1);
}

const boodschappen = process.argv.slice(2);


function telHavermelk($boodschappen) {
    let teller = 0;

    for (let i = 0; i < boodschappen.length; i++) {
        if (boodschappen[i].toLowerCase() === 'havermelk') {
            teller++;
        }
    }

    return teller;
}

const aantalHavermelk = telHavermelk(boodschappen);

console.log(`Aantal havermelk: ${aantalHavermelk}`);
