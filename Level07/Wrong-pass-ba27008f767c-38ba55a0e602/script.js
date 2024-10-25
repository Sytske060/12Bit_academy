const Allh2 = document.querySelectorAll('h2');
const namen = document.querySelectorAll('body div');
const leeftijdenSpan = document.querySelectorAll('span');

namen.forEach((leonieMustafa) => {
    const naamElement = leonieMustafa.getElementsByTagName('h1')[0];
    const leeftijden = parseFloat(leonieMustafa.getElementsByTagName('span')[1].innerText);
    const cursive1 = leonieMustafa.querySelectorAll('h2')[0];
    const cursive2 = leonieMustafa.querySelectorAll('h2')[1];

    const getalsize1 = leonieMustafa.querySelectorAll('span')[0];
    const getalsize2 = leonieMustafa.querySelectorAll('span')[1];

    naamElement.style.textDecoration = "underline";

    cursive1.style.fontStyle = "italic";
    cursive2.style.fontStyle = "italic";
    getalsize1.style.fontSize = "32px";
    getalsize2.style.fontSize = "32px";

    if (leeftijden >= 16.5) {
        naamElement.classList.add('starten');
    } else {
        naamElement.classList.add('wachten');
    }
});
