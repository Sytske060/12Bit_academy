function text() {
    var leonie = document.getElementById("naamLeonie").innerText;
    var leeftijd = document.getElementById("leeftijdLeonie").innerText;
    console.log(leonie + " is " + leeftijd + " jaar oud.");

    var mustafa = document.getElementById("naamMustafa").innerText;
    var leeftijdM = document.getElementById("leeftijdMustafa").innerText;
    console.log(mustafa + " is " + leeftijdM + " jaar oud");
}


document.addEventListener("DOMContentLoaded", function () {
    text();
});
