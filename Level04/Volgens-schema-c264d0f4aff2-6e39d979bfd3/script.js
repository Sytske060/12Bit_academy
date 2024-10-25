const fruit = parseInt(process.argv[2], 10);
const brood = parseInt(process.argv[3], 10);
const vloer = parseInt(process.argv[4], 10);
let vrijHours = 0;
let s = 0;
console.log('Dagrooster taken');
console.log("===================");

for (let i = 8; i < 21; i++) {
    let scheduleEntry = `${i}:00 - `;

    let tasksInHour = [];

    s++;

    if (s % fruit === 1) {
        tasksInHour.push('versheid van de groenten en fruit checken');
    }
    if (s % brood === 1) {
        tasksInHour.push('nieuw brood maken');
    }
    if (s % vloer === 1) {
        tasksInHour.push('vloer schoonmaken');
    }
    if (tasksInHour.length === 0) {
        tasksInHour.push('vrij');
        vrijHours += 1;
    }

    scheduleEntry += tasksInHour.join(',');

    console.log(scheduleEntry);
}
console.log("===================");
console.log(`Uren vrij: ${vrijHours}`);
