const pincode = 123752;
const code = parseInt(process.argv[2], 10);
const functie = process.argv[3];
const dag = parseInt(process.argv[4], 10);


// if (console.log(`Toegang verleend ${pincode[2] == 123752 && functie[3] == bestuurder}`));


if (code === pincode && (functie === 'bestuur' || functie === 'administratief medewerker') && dag < 5) {
    console.log('Toegang verleend.');
} else if (dag < 5) {
    console.log('Verkeerde pincode of je hebt niet de juiste rechten.');
} else {
    console.log('Veiligheidsdiensten worden ingeschakeld');
}