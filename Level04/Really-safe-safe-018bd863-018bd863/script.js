const pogingen = parseInt(process.argv[2], 10);
const code = parseInt(process.argv[3], 10);
const functie = process.argv[4];
const dag = parseInt(process.argv[5], 10);
const tijd = parseInt(process.argv[6], 10);
let toegang = false;

console.log('#fouten: ' + pogingen + ', pin: ' + code + ', functie: ' + functie + ', dag: ' + dag + ', tijd: ' + tijd);
if (pogingen < 5) {
    if (functie === 'bestuur') {
        if (code === 123752) {
            console.log('kluis opent.');
        } else if (code !== 123752) {
            console.log('verkeerde pincode');
        }
    } else if (tijd === 15 && functie === 'administratief medewerker') {
        if (code === 123752) {
            console.log('kluis opent.');
            console.log('Sms naar bestuur');
        } else if (code !== 123752) {
            console.log('verkeerde pincode');
        }
    } else if (functie !== 'administratief medewerker') {
        console.log('alarm gaat af');
    } else {
        console.log('stil alarm gaat af');
    }
} else {
    console.log('Kluis is geblokkeerd');
}


// if (code === pincode && (functie === 'bestuur' || functie === 'administratief medewerker') && dag < 5) {
//     console.log('Toegang verleend.');
// } else if (dag < 5) {
//     console.log('Verkeerde pincode of je hebt niet de juiste rechten.');
// } else {
//     console.log('veiligheidsdiensten worden ingeschakeld');
// }