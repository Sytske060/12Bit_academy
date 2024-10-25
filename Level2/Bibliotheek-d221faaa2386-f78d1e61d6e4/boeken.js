let catalogus = [
    {
        ISBN: "978-1449355739",
        aantal: 1,
    },
    {
        ISBN: "978-0596806750",
        aantal: 2,
    },
    {
        ISBN: "978-0596805524",
        aantal: 1,
    },
    {
        ISBN: "978-1491905012",
        aantal: 1,
    },
    {
        ISBN: "978-0596008642",
        aantal: 3,
    },
    {
        ISBN: "978-0596004897",
        aantal: 2,
    },
];



const dagverloop = [
    {
        ISBN: "978-0596806750",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1491905012",
        handeling: "teruggave",
    },
    {
        ISBN: "978-0596805524",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1449319243",
        handeling: "teruggave",
    },
    {
        ISBN: "978-1491905012",
        handeling: "uitlening",
    },
    {
        ISBN: "978-0596004897",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1491908426",
        handeling: "teruggave",
    },
    {
        ISBN: "978-1449319243",
        handeling: "uitlening",
    },
    {
        ISBN: "978-0596004361",
        handeling: "teruggave",
    },
    {
        ISBN: "978-1491905012",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1449355739",
        handeling: "uitlening",
    },
];

for (let i = 0; i < dagverloop.length; i++) {
    const ISBN = dagverloop[i].ISBN;
    const Inhoud = catalogus.findIndex(book => book.ISBN === ISBN); // Kijkt voor zelfde ISBN catalogus & dagverloop. Anders opgeslagen als -1 //

    if (Inhoud !== -1) { // Kijkt of de ISBN word gevonden in de catalog //
        if (dagverloop[i].handeling === "uitlening" && catalogus[Inhoud].aantal > 0) {
            catalogus[Inhoud].aantal -= 1;
        } else if (dagverloop[i].handeling === "teruggave") {
            catalogus[Inhoud].aantal += 1;
        }
    }
}

// Boeken pushen die nog niet in catalogus staan //
catalogus.push({
    ISBN: dagverloop[6].ISBN,
    aantal: 1,
});

catalogus.push({
    ISBN: dagverloop[8].ISBN,
    aantal: 1,
});

for (let i = 0; i < catalogus.length; i++) {
    if (catalogus[i].aantal > 0) {
        console.log(`ISBN: ${catalogus[i].ISBN}, aantal: ${catalogus[i].aantal}`);
    }
}




// 1ste code

// for (let i = 0; i < catalogus.length; i++) {
//  if (dagverloop[i].handeling === "uitlening" && catalogus[i].aantal > 0) {
//    catalogus[i].aantal -= 1;
// } else if (dagverloop[i].handeling === "teruggave") {
//  catalogus[i].aantal += 1;
// }

// if (catalogus[i].aantal > 0) {
//   console.log(catalogus[i]);
// }
// }