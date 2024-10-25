let boodschappen = ['spaghetti', 'pesto', 'paprika'];
boodschappen[3] = 'wc-papier';
boodschappen[4] = 'pompoen';

console.log(boodschappen);

// Zoek de index van 'pompoen' en verwijder het element
let indexVanPompoen = boodschappen.indexOf('pompoen');
if (indexVanPompoen !== -1) {
    boodschappen.splice(indexVanPompoen, 1);
}

console.log('Pompoen is verwijderd');
console.log(boodschappen);

