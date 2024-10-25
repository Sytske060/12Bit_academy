const treinStations = [
    ["Delft", 8400170],
    ["Amsterdam", 8400058],
    ["Alkmaar", 8400050],
    ["Deventer", 8400173],
    ["Venlo", 8400644],
    ["Utrecht", 8400621],
];

const apiurl = "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures";

function getData() {
    fetch('https://randomuser.me/api/?results=100')
        .then(function (res) {
            return res.json();
        })
        .then(function (userData) {
            fetch('https://restcountries.com/v3.1/all')
                .then(function (res) {
                    return res.json();
                })



                .then(function (countryData) {
                    const mensen = userData.results;
                    const flags = countryData;

                    mensen.slice(0, 6).forEach(function (user, index) {
                        const country = flags.find(function (countryObj) {
                            return countryObj.name.common === user.location.country;
                        });

                        const container = document.createElement("div");
                        container.classList.add("person-info");



                        container.innerHTML = `
                            <h4>${user.name.first}</h4>
                            <img src="${user.picture.large}" alt="Profile Picture">
                            <img src="${country.flags.png}" alt="Country Flag" style="width: 50px;">
                            <p>Email: ${user.email}</p>
                            <p>Op bezoek in ${treinStations[index][0]}</p>
                            <p class="direction">Eindbestemming: </p>
                        `;

                        document.querySelector('.persons').appendChild(container);



                        const url = new URL(apiurl);
                        url.searchParams.append("station", treinStations[index][0]);
                        url.searchParams.append("uicCode", treinStations[index][1]);
                        url.searchParams.append("lang", 'nl');

                        fetch(url.toString(), {
                            headers: {
                                "Ocp-Apim-Subscription-Key": "aacc5e8d91424c33b7407e37f0de72ce",
                                "Content-Type": "application/json",
                            },
                        })
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (response) {
                                const directionText = response.payload.departures[0].direction;
                                container.querySelector('.direction').textContent = `Eindbestemming: ${directionText}`;
                            });
                    });
                });
        });
}

document.addEventListener('DOMContentLoaded', getData);

