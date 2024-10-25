const uren = [
    [7, 4, 6, 8],
    [6, 8, 5],
    [5, 5, 8, 7, 6],
    [8, 6, 5, 8, 5],
];

let totaal = 0;

for (let i = 0; i < uren.length; i++) {
    let bijelkaar = 0;
    for (let j = 0; j < uren[i].length; j++) {
        totaal += uren[i][j];
        bijelkaar += uren[i][j];
    }
    console.log(`Week ${i + 1}: ${bijelkaar} uur`);
} console.log(`Totaal: ${totaal} uur`);