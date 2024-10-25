/**
 * Bereken de kosten voor de gemeente van de projecten met de gegeven prijzen
 * en kortingsgrenzen.
 * @param prijzen       Een array met per project de prijs.
 * @param grenzen       Een array met per project de kortingsgrens.
 * @returns             Een array met per project de kosten voor de stad.
 */
function berekenKosten(prijzen, grenzen) {
    const kosten = [];

    for (let i = 0; i < prijzen.length; i++) {
        const prijs = prijzen[i];
        const grens = grenzen[i];
        let geld = prijs;

        if (geld > grens) {
            const korting = 0.1 * (geld - grens);
            geld -= korting;
        }

        const korting = geld % 3;
        geld -= korting;
        kosten.push(geld);
    }

    return kosten;
}

/**
 * Berekent de som van de elementen in een array.
 * @param array     Een array van Numbers
 * @returns         De totale som van de elementen in de array.
 */
function berekenSom(array) {
    let som = 0;

    for (let i = 0; i < array.length; i++) {
        som += array[i];
    }

    return som;
}

const prijzen = [2, 10, 20, 40];
const grenzen = [1, 8, 15, 23];
const kosten = berekenKosten(prijzen, grenzen);
const totaal = berekenSom(kosten);
console.log(`De projecten kosten de stad in totaal ${totaal} miljoen.`);