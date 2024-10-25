function veranderAchtergrond() {
    const body = document.body;
    const kleurSelectie = document.getElementById("kleurSelectie");

    const nieuweKleur = kleurSelectie.value;
    body.style.backgroundColor = nieuweKleur;
}

