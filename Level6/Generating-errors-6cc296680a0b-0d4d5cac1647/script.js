function check(n) {
    if (!(n >= -500 && n <= 500)) {
        return new RangeError("(weggeblurd)");
    }
}

function logError(error) {
    console.log('Er is een error gevonden! ');
    console.log('ErrorType: ' + error.name);
    console.log('Message: ' + error.message);
}

try {
    const Const = 5;
    Const = 10;
} catch (error) {
    error.message = "(weggeblurd)";
    logError(error);
}

try {
    let functie = geenfunctie;
} catch (error) {
    error.message = "(weggeblurd)";
    logError(error);
}

try {
    const result = check(2000);
    if (result instanceof RangeError) {
        logError(result); // Log the RangeError
    }
} catch (error) {
    error.message = "(weggeblurd)";
    logError(error);
}

