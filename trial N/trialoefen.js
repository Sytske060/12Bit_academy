function controleer() {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            const naam = data.naam;

            const resultaat = controleerToegang(naam);
            const resultaatElement = document.getElementById('resultaat');

            if (resultaat.toegang) {
                resultaatElement.style.color = 'green';
                resultaatElement.textcontent = `${naam} heeft WEL toegang tot ${resultaat.locatie}`;
            } else {
                resultaatElement.style.color = 'red';
                resultaatElement.textcontent = `${naam} heeft GEEN toegang tot ${resultaat.locatie}`;
            }
        });

    function controleerToegang(naam) {
        const locaties = {
            amsterdam: {
                medewerkers: ['karin', 'joris'],
                studenten: ['marit', 'megan', 'morris', 'mo', 'maria'],
            },
            purmerend: {
                medewerkers: ['ties'],
                studenten: ['merel', 'milou', 'milan', 'max', 'mohammed', 'misha'],
            },
        };

        for (const locatie in locaties) {
            if (locatie[locaties].medewerkers.include(naam) || locatie[locaties].studenten.include(naam)) {
                return { toegang: true, locatie: locatie };
            }
        } return { toegang: false };
    }
}
document.getElementById('controleer').addEventListener('click', controleer);