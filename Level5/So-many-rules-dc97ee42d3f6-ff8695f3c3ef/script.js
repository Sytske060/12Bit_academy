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
    var autoRijden;

    if (persoon.leeftijd >= 18) {
        autoRijden = "Ja";
    } else {
        autoRijden = "Nee";
    }

    var informatie = `
        <h2>${persoon.naam}</h1>
        <p>Leeftijd: ${persoon.leeftijd}</p>
        <p>Hobby: ${persoon.hobby}</p>
        <p>Mag autorijden: ${autoRijden}</p>
    `;

    var personElement = document.createElement("p");
    personElement.innerHTML = informatie;
    containerElement.appendChild(personElement);
}