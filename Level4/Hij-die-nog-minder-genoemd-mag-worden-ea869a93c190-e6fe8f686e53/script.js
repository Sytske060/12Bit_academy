document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptknop = document.getElementById("accept-knop");
    const rejectknop = document.getElementById("reject-knop");


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
