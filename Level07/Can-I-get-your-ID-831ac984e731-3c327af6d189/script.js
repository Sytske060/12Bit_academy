
var leonie = document.getElementById("naamLeonie").innerText;
var leeftijd = document.getElementById("leeftijdLeonie").innerText;

if (leeftijd >= 17) {
    document.getElementById("naamLeonie").innerText = leonie + " mag beginnen met rijlessen ";
} else {
    document.getElementById("naamLeonie").innerText = leonie + " moet nog even wachten!";
}

var mustafa = document.getElementById("naamMustafa").innerText;
var leeftijdM = document.getElementById("leeftijdMustafa").innerText;

if (leeftijdM >= 17) {
    document.getElementById("naamMustafa").innerText = mustafa + " mag beginnen met rijlessen ";
} else {
    document.getElementById("naamMustafa").innerText = mustafa + " moet nog even wachten!";
}