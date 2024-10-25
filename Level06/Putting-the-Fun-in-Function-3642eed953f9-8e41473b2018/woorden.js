let woorden = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
let letters = ["o", "p", "q"];

function opdracht(input, letter) {
    for (let i = 0; i < input.length; i++) {
        const s = input[i].includes(letter);

        if (s) {
            console.log(input[i], "bevat de letter", letter);
        }
    }
}

opdracht(woorden, letters[0]);
opdracht(woorden, letters[1]);
opdracht(woorden, letters[2]);

