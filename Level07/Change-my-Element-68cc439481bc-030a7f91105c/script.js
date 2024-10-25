document.addEventListener('DOMContentLoaded', function () {
    var leoniee = document.querySelectorAll(".leonie h1");
    var Mustafaa = document.querySelectorAll(".mustafa h1");
    var Inhoudleonie = document.querySelectorAll(".leonie h2");
    var Inhoudmustafa = document.querySelectorAll(".mustafa h2");
    var spanElementen = document.querySelectorAll("h2 span");

    leoniee.forEach((l) => {
        l.style.color = 'green';
        l.style.textDecoration = 'underline';
    });


    Mustafaa.forEach((M) => {
        M.style.color = 'red';
        M.style.textDecoration = 'underline';
    });


    Inhoudleonie.forEach((I) => {
        I.style.fontStyle = 'italic';
    });


    Inhoudmustafa.forEach((H) => {
        H.style.fontStyle = 'italic';
    });


    spanElementen.forEach((span) => {
        span.style.fontSize = '32px';
    });
});


