const uren = [
    {
        bellen: 3,
        emails: 4,
        meetings: 1,
    },
    {
        bellen: 3,
        emails: 3,
        meetings: 2,
    },
    {
        bellen: 3,
        emails: 5,
    },
    {
        bellen: 2,
        emails: 4,
        meetings: 2,
    },
    {
        bellen: 3,
        emails: 2,
    },
];

let bellen = 0;
let emails = 0;
let meetings = 0;


for (let i = 0; i < uren.length; i++) {
    if (uren[i].bellen) {
        bellen += uren[i].bellen;
    }

    if (uren[i].emails) {
        emails += uren[i].emails;
    }

    if (uren[i].meetings) {
        meetings += uren[i].meetings;
    }
}

let totaal = bellen + emails + meetings;

console.log(`Totaal bellen: ${bellen} uur`);
console.log(`Totaal emails: ${emails} uur`);
console.log(`Totaal meetings: ${meetings} uur`);
console.log(`Totaal: ${totaal} uur`);