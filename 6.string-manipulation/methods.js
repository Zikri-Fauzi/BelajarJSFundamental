// const username = "zikri"
// const firstLetterUppercase = username.charAt(0).toUpperCase(); // hasil Z (charAt untuk memilih karakter sesuai index)(toUpperCase membuat target menjadi huruf kapital)

// const restOfUsername = username.slice(1); // method (slice) mengambil sisa huruf dari variabel username dari index 1 

// console.log(firstLetterUppercase + restOfUsername); // output = (username dengan huruf awalan kapital)


//challenge manipulasi string
let enigma = "Enigma Bootcamp Keren";
let kata = "Mantap!";

let change = "Awesome is Enigma Bootcamp, ";
let stringMethode = enigma.replace(enigma, change) + kata.toUpperCase();

console.log(stringMethode);