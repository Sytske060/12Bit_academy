
function veranderAchtergrond() {
    const body = document.body;
    const kleurSelectie = document.getElementById("kleurSelectie");

    const nieuweKleur = kleurSelectie.value;
    body.style.backgroundColor = nieuweKleur;
}


function veranderTitel() {
    const titel1 = document.getElementById("title");
    const titel2 = document.getElementById("title1");
    const titel3 = document.getElementById("title2");

    const body = document.body;
    const kleurSelectie = document.getElementById("kleurSelectie");

    const nieuweKleur = kleurSelectie.value;

    titel1.style.color = nieuweKleur;
    titel2.style.color = nieuweKleur;
    titel3.style.color = nieuweKleur;
}


function veranderBeide() {
    const titel1 = document.getElementById("title");
    const titel2 = document.getElementById("title1");
    const titel3 = document.getElementById("title2");

    const body = document.body;
    const kleurSelectie = document.getElementById("kleurSelectie");

    const nieuweKleur = kleurSelectie.value;

    titel1.style.color = nieuweKleur;
    titel2.style.color = nieuweKleur;
    titel3.style.color = nieuweKleur;
    body.style.backgroundColor = nieuweKleur;
}


