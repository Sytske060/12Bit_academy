function check(n) {
    if (!(n >= -500 && n <= 500)) {
        throw new RangeError("The argument must be between -500 and 500.");
    }
}

function logError(error) {
    console.log('Er is een error gevonden! ');
    console.log('ErrorType: ' + error.name);
    console.log('Message: ' + error.message);
}

try {
    check(2000);
} catch (error) {
    if (error instanceof RangeError) {
    }
    logError(error);
}