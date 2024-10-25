let n1 = process.argv[2];
let n2 = process.argv[3];
let n3 = process.argv[4];
let n4 = process.argv[5];

let Administratie = parseInt(n1, 10);
let Infrastructuur = parseInt(n2, 10);
let Overig = parseInt(n3, 10);
let Totaal = parseInt(n4, 10);

console.log(`Aan administratie en infrastructuur is ${Administratie + Infrastructuur} miljoen uitgegeven
De overige kosten zijn ${Totaal - Administratie - Overig - Infrastructuur} miljoen 
administratie was goed voor ${(Administratie / Totaal) * 100}% van de uitgaven`);
