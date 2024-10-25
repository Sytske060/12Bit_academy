const magazijn = {
    borden: 42,
    glazen: 57,
    messen: 85,
    vorken: 96,
    lepels: 103,
};

const verkocht = [
    "lepel", "vork", "vork", "bord",
    "lepel", "mes", "glas", "glas",
    "bord", "lepel", "lepel", "bord",
    "glas", "bord", "mes", "bord",
    "lepel", "vork", "glas", "bord",
    "vork", "vork",
];


const spullen = ['borden', 'glazen', 'messen', 'vorken', 'lepels'];

let aantalBordenVerkocht = 0;
let aantalGlazenVerkocht = 0;
let aantalMessenVerkocht = 0;
let aantalVorkenVerkocht = 0;
let aantalLepelsVerkocht = 0;

for (let i = 0; i < verkocht.length; i++) {
    const item = verkocht[i];
    switch (item) {
        case 'bord':
            aantalBordenVerkocht++;
            break;
        case 'glas':
            aantalGlazenVerkocht++;
            break;
        case 'mes':
            aantalMessenVerkocht++;
            break;
        case 'vork':
            aantalVorkenVerkocht++;
            break;
        case 'lepel':
            aantalLepelsVerkocht++;
            break;
        default:
            break;
    }
}

magazijn.borden -= aantalBordenVerkocht;
magazijn.glazen -= aantalGlazenVerkocht;
magazijn.messen -= aantalMessenVerkocht;
magazijn.vorken -= aantalVorkenVerkocht;
magazijn.lepels -= aantalLepelsVerkocht;

const output = JSON.stringify(magazijn);
console.log(output);
