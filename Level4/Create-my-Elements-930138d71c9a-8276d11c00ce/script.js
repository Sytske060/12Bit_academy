// Maak een nieuw img-element aan
var nieuwImg = document.createElement("img");

// Stel de bron (src) van de afbeelding in
nieuwImg.src = "https://picsum.photos/id/0/300/200";

// Vind het container-element
var containerElement = document.getElementById("container");

// Voeg het nieuwe img-element toe aan het container-element
containerElement.appendChild(nieuwImg);



var nieuwParagraaf = document.createElement("h1");

nieuwParagraaf.textContent = "Dit is mijn titel";

var containerElement2 = document.getElementById("container");

containerElement.appendChild(nieuwParagraaf);



var nieuwPelement = document.createElement("p");

nieuwPelement.textContent = "en dit is mijn paragraaf";

var containerpelement = document.getElementById("container");

containerElement2.appendChild(nieuwPelement);