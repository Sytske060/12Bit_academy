let pogingen = process.argv[1];
const code = parseInt(process.argv[2], 10);
const functie = process.argv[3];
const dag = parseInt(process.argv[4], 10);
const tijd = process.argv[5];
const pincode = 123752;


if (pogingen < 5) {
    if(dag < 5) {
        console.log('');
    } else if (tijd > 8 && tijd < 18) {
        console.log('alarm gaat af');
    } else {
        console.log('still alarm gaat af');
    }
} else {
    console.log('kluis is geblokeerd');
}


if (code === pincode && (functie === 'bestuur' || functie === 'administratief medewerker') && dag < 5) {
    console.log('Toegang verleend.');
} else if (dag < 5) {
    console.log('Verkeerde pincode of je hebt niet de juiste rechten.');
} else {
    console.log('veiligheidsdiensten worden ingeschakeld');
}