const totaalbedrag = parseFloat(process.argv[2]);
const dag = parseInt(process.argv[3], 10);

let korting;
switch (dag) {
    case 0: // Maandag 0%
        korting = 0;
        break;
    case 1: // Dinsdag 2%
        korting = 2;
        break;
    case 2: // Woensdag 3%
        korting = 3;
        break;
    case 3: // Donderdag 4%
        korting = 4;
        break;
    case 4: // Vrijdag 0,5%
        korting = 0.5;
        break;
    case 5: // Zaterdag 1,5%
        korting = 1.5;
        break;
    case 6: // Zondag 5%
        korting = 5;
        break;
    default:
        console.log("");
        process.exit(1);
}

const kortingsbedrag = totaalbedrag * (korting / 100);
const teBetalenBedrag = totaalbedrag - kortingsbedrag;

console.log(`Totaalbedrag is ${teBetalenBedrag}`);

