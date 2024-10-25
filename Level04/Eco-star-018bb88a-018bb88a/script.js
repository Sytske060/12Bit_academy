let dieselVerboden = process.argv[2];
let afvalscheiding = process.argv[3];
let natuurgebiedPercentage = process.argv[4];


let sterren = 0;

if (dieselVerboden === "ja") {
    sterren++;
}

if (afvalscheiding === "ja") {
    sterren++;
}

if (natuurgebiedPercentage > 25) {
    sterren++;
}


if (sterren === 3) {
    console.log("Het is een milieuvriendelijke stad.");
} else if (sterren === 0) {
    console.log("De stad moet omgevormd worden");
} else {
    let nogNodig = 3 - sterren;
    console.log("De stad heeft nog " + nogNodig + " ster(ren) nodig om milieuvriendelijk te zijn.");
}




