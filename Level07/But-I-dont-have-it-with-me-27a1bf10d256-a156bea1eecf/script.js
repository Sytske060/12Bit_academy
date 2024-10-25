var leeftijdLeonie = parseInt(document.querySelector("#leeftijdLeonie").textContent, 10);

if (leeftijdLeonie >= 17) {
    document.querySelector("#naamLeonie").textContent = " mag beginnen met rijlessen ";
} else {
    document.querySelector("#naamLeonie").textContent = " moet nog even wachten!";
}


var leeftijdMustafa = parseInt(document.querySelector("#leeftijdMustafa").textContent, 10);

if (leeftijdMustafa >= 17) {
    document.querySelector("#naamMustafa").textContent = " mag beginnen met rijlessen ";
} else {
    document.querySelector("#naamMustafa").textContent = " moet nog even wachten!";
}
