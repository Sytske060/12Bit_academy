let geld = parseInt(process.argv[2], 10);
let biljetten = [50, 20, 10, 5];

let i = 0;

while (i < biljetten.length) {
    if (geld >= biljetten[i]) {
        let aantalBiljetten = parseInt(geld / biljetten[i], 10);
        console.log(`${aantalBiljetten}x €${biljetten[i]}`);

        geld %= biljetten[i];
    }
    i++;
}

