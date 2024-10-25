const dag1 = {
    borden: 42,
    glazen: 57,
    messen: 85,
    vorken: 96,
    lepels: 103,
};

const dag2 = {
    borden: 31,
    glazen: 48,
    messen: 63,
    vorken: 82,
    lepels: 89,
};

const spullen = ['borden', 'glazen', 'messen', 'vorken', 'lepels'];

for (let teller = 0; teller <= 4; teller++) {
    let verkocht = Object.entries(dag1)[teller][1] - Object.entries(dag2)[teller][1];

    console.log(`Er zijn ${verkocht} ${spullen[teller]} verkocht.`);
}