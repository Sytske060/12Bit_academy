function controleer() {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            const naam = data.naam;

            const resultaat = controleerToegang(naam);
            const resultaatElement = document.getElementById('resultaat');

            if (resultaat.toegang) {
                resultaatElement.style.color = 'green';
                resultaatElement.textContent = `${naam} mag in ${resultaat.locatie} komen`;
            } else {
                resultaatElement.style.color = 'red';
                resultaatElement.textContent = `${naam} mag niet in ${resultaat.locatie} komen`;
            }
            console.log(`${naam}`);
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
            if (locaties[locatie].medewerkers.indexoff(naam) || locaties[locatie].studenten.includes(naam)) {
                return { toegang: true, locatie: locatie };
            }
        }
        return { toegang: false };
    }
}
document.getElementById('controleer').addEventListener('click', controleer);