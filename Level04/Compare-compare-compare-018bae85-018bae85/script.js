let Nederland = process.argv[2];
let Duitsland = process.argv[3];
let Frankrijk = process.argv[4];
let NL = parseInt(Nederland, 10);
let DE = parseInt(Duitsland, 10);
let FR = parseInt(Frankrijk, 10);

console.log(`Nederland heeft minder inwoners dan Duitsland en Frankrijk: ${NL < FR && NL < DE}
Nederland of Frankrijk heeft meer inwoners dan Duitsland: ${NL > DE || FR > DE}
Nederland heeft niet meer inwoners dan Duitsland: ${NL <= DE}`);

