const gemeente = {
    naam: 'Bar',
    hoofdstad: 'Foobarstad',
    steden: [
        {
            postcode: '10234',
            naam: 'Foobarstad',
            inwoners: 10234,
            burgemeester: {
                naam: 'nhoJ',
                aangetreden: 2020,
            },
        },

        {
            postcode: '10101',
            naam: 'Nieuw Foo',
            inwoners: 34567,
            burgemeester: {
                naam: 'enaJ',
                aangetreden: 2019,
            },
        },

        {
            postcode: '34633',
            naam: 'Bardorp',
            inwoners: 12354,
            burgemeester: {
                naam: 'hargaZ',
                aangetreden: 2020,
            },
        },

        {
            postcode: '29567',
            naam: 'Barfoo',
            inwoners: 1376,
            burgemeester: {
                naam: 'leraK',
                aangetreden: 2022,
            },
        },

        {
            postcode: '55555',
            naam: 'Prodstad',
            inwoners: 55555,
            burgemeester: {
                naam: 'iL',
                aangetreden: 2018,
            },
        },

        {
            postcode: '23412',
            naam: 'Developerdorp',
            inwoners: 3,
            burgemeester: {
                naam: 'nalA',
                aangetreden: 2021,
            },
        },

        {
            postcode: '33669',
            naam: 'Nieuw developerdorp',
            inwoners: 52978,
            burgemeester: {
                naam: 'regsdE',
                aangetreden: 2020,
            },
        },
    ],
};


for (let teller = 0; teller <= 6; teller++) {
    document.getElementById(`naam${teller + 1}`).innerText = gemeente.steden[teller].naam;
    document.getElementById(`inwonersaantal${teller + 1}`).innerText = gemeente.steden[teller].inwoners;
    document.getElementById(`burgemeester${teller + 1}`).innerText = gemeente.steden[teller].burgemeester.naam;

    const omgekeerdeNaam = gemeente.steden[teller].burgemeester.naam.split('').reverse().join('');
    document.getElementById(`burgemeester${teller + 1}`).innerText = omgekeerdeNaam;

    document.getElementById(`postcode${teller + 1}`).innerText = gemeente.steden[teller].postcode;
}


// document.getElementById('naam1').innerText = gemeente.steden[0].naam;
// document.getElementById('naam2').innerText = gemeente.steden[1].naam;
// document.getElementById('naam3').innerText = gemeente.steden[2].naam;
// document.getElementById('naam4').innerText = gemeente.steden[3].naam;
// document.getElementById('naam5').innerText = gemeente.steden[4].naam;
// document.getElementById('naam6').innerText = gemeente.steden[5].naam;
// document.getElementById('naam7').innerText = gemeente.steden[6].naam;

// let keys = ['naam', 'inwoners', 'burgemeester', 'postcode'];

// for (let i = 0; i < keys.length; i++) {
// console.log(keys[i]);
// console.log(gemeente.steden[0][keys[i]]);
// console.log(document.getElementById(keys[0]).innerText = gemeente.steden[0].Array);
// }

