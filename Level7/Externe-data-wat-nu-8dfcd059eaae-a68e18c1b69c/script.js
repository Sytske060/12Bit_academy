const requestUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const toAppend = document.querySelector("pre");

fetch(requestUrl)
    .then(response => response.json())
    .then(responseData => {
        toAppend.textContent = JSON.stringify(responseData, null, 2);
    });