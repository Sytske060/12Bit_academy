let Nederland = process.argv[2];
let Duitsland = process.argv[3];

let NederlandInGetal = parseInt(Nederland, 10);
let DuitslandInGetal = parseInt(Duitsland, 10);

console.log(`inwonersNL < inwonersDE: ${NederlandInGetal < DuitslandInGetal}`);
console.log(`inwonersNL > inwonersDE: ${NederlandInGetal > DuitslandInGetal}`);