
console.log("Deze code wordt uitgevoerd");

function errorFunction() {
    throw new Error('Uncaught Blokkade!');
}

errorFunction();
console.log("Deze code wordt niet uitgevoerd");