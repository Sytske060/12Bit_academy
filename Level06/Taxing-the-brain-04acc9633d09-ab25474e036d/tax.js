let input = process.argv[2];

function deelbaar(getall) {
    let belasting = 0;
    if (getall >= 0) {
        getall -= 10000;
    }
    if (getall >= 0) {
        if (getall >= 20000) {
            belasting += (0.2 * 20000);
        } else {
            belasting += (0.2 * getall);
        }
        getall -= 20000;
    }
    if (getall >= 0) {
        if (getall >= 40000) {
            belasting += (0.5 * 40000);
        } else {
            belasting += (0.5 * getall);
        }
        getall -= 40000;
    }
    if (getall >= 0) {
        belasting += (0.9 * getall);
    }
    return belasting;
}

function berekenMinimum(percentage) {
    input = 0;
    let r = true;
    while (r) {
        input += 100;
        if ((deelbaar(input) / input) * 100 >= percentage) {
            r = false;
        }
    }

    return input;
}

if (input > 0) {
    console.log(`Income ${input}; effective tax: ${(deelbaar(input) / input) * 100}%`);
} else {
    let minInkomen = berekenMinimum(50);
    console.log(`Minimaal inkomen om minstens 50% belasting te betalen: ${minInkomen}`);
}

