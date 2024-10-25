let inwoners = process.argv[2];

if (inwoners >= 10000) {
    console.log("Megastad");
} else if (inwoners >= 25) {
    console.log("stad");
} else {
    console.log("dorp");
}
