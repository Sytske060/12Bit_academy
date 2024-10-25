let timeLeft = 60;
let countdownInterval;
let currentWord; // Variabele om het huidige woord bij te houden
let correctWords = 0;
let totalCharacters = 0;

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(countdownInterval); // Stop de countdown
        showResults(); // Laat de resultaten zien
    }
}

// Willekeurig woord
async function getWord() {
    const response = await fetch("https://random-word-bit.vercel.app/word");
    const word = await response.json();
    return word[0].word.toLowerCase();
}

// Laat de resultaten zien
function showResults() {
    const responseElement = document.getElementById('response');
    const correctWordsElement = document.getElementById('correctWords');
    const totalCharactersElement = document.getElementById('totalCharacters');
    responseElement.textContent = `Je typte ${correctWords} woorden (${totalCharacters} karakters) per minuut`;
}

// Event listener voor de startknop
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', async function () {
    countdownInterval = setInterval(updateCountdown, 1000);
    const responseElement = document.getElementById('response');
    currentWord = await getWord(); // Haal het eerste woord op
    responseElement.textContent = `${currentWord}`;
    startButton.style.display = "none";
    typvak.focus();
});

// Event listener voor het invoervak om een nieuw woord te verkrijgen bij het indrukken van Enter
const typvak = document.getElementById('typvak');
typvak.addEventListener('keypress', async function (event) {
    if (event.key === 'Enter') {
        const typedWord = typvak.value.trim().toLowerCase();

        // Controleer of het ingevoerde woord overeenkomt met het weergegeven woord
        if (typedWord === currentWord) {
            correctWords++;
            totalCharacters += typedWord.length;
            typvak.value = ''; // Leeg het invoervak
            currentWord = await getWord(); // Haal een nieuw woord op
            const responseElement = document.getElementById('response');
            responseElement.textContent = `${currentWord}`;
        }
    }
});




