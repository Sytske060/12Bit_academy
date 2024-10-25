document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptknop = document.getElementById("accept-knop");
    const rejectknop = document.getElementById("reject-knop");
    const tekst1 = document.getElementById("tekst");

    function displayCustomAlert(message) {
        window.alert(message);
    }

    function updateAndDisplayTime() {
        setTimeout(() => {
            updateAndDisplayTime();
        }, 1000);

        setTimeout(() => {
            var huidigeTijd = new Date();
            var uren = huidigeTijd.getHours();
            var minuten = huidigeTijd.getMinutes();
            var seconden = huidigeTijd.getSeconds();

            tekst1.innerHTML = "Huidige tijd: " + uren + ":" + minuten + ":" + seconden + ". Tijd voor pauze?";
        }, 2000);
    }

    updateAndDisplayTime();

    setTimeout(() => {
        var huidigeTijd = new Date();
        var uren = huidigeTijd.getHours();
        var minuten = huidigeTijd.getMinutes();
        var seconden = huidigeTijd.getSeconds();
        var tijdBericht = "Huidige tijd: " + uren + ":" + minuten + ":" + seconden;

        displayCustomAlert(tijdBericht);
    }, 4000);

    acceptknop.addEventListener("click", () => {
        cookieBanner.innerHTML = '<p>Bedankt voor je toestemming!</p>';
        setTimeout(function () {
            cookieBanner.style.display = "none";
        }, 2000);
    });

    rejectknop.addEventListener("click", () => {
        cookieBanner.innerHTML = '<p>Sad... :(</p>';
        setTimeout(() => {
            cookieBanner.style.display = "none";
        }, 2000);
    });
});


