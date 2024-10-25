const personen = [
    {
        naam: "Mustafa",
        leeftijd: 15,
        hobby: "vissen",
    },
    {
        naam: "Leonie",
        leeftijd: 23,
        hobby: "lezen",
    },
    {
        naam: "Jasper",
        leeftijd: 18,
        hobby: "tuinieren",
    },
];

var containerElement = document.getElementById("object");

for (var i = 0; i < personen.length; i++) {
    var persoon = personen[i];
    var autoElement;

    if (persoon.leeftijd >= 18) {
        autoElement = document.createElement("p");
        autoElement.textContent = "Mag rijden: Ja";
    } else {
        autoElement = document.createElement("p");
        autoElement.textContent = "Mag rijden: Nee";
    }

    var naamElement = document.createElement("h1");
    naamElement.textContent = persoon.naam;
    containerElement.appendChild(naamElement);

    var leeftijdElement = document.createElement("p");
    leeftijdElement.textContent = "Leeftijd: " + persoon.leeftijd;
    containerElement.appendChild(leeftijdElement);

    var hobbyElement = document.createElement("p");
    hobbyElement.textContent = "Hobby: " + persoon.hobby;
    containerElement.appendChild(hobbyElement);

    containerElement.appendChild(autoElement);
}