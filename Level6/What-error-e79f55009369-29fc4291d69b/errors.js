function optellen(x) {
    let getal = 0;
    getal = getal + x;
    return getal;
}

function check(x) {
    if (x < 0) {
        throw new RangeError("Getal moet groter zijn dan 0");
    }

    if (typeof missendefunctie === 'undefined') {
        throw new ReferenceError("missendefunctie is not defined");
    }
}

function logError(error) {
    console.log('Er is een error gevonden! ');
    console.log('ErrorType: ' + error.name);
    console.log('Message: ' + error.message);
}


try {
    const myConst = 10;
    myConst = 20;
} catch (error) {
    logError(error);
}

try {
    let a = missendefunctie;
} catch (error) {
    logError(error);
}

try {
    const dagenInDeWeek = -7;
    check(dagenInDeWeek);
} catch (error) {
    logError(error);
}




