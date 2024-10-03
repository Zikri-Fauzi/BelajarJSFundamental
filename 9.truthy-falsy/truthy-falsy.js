//truthy? falsy? true? false?
// const username = "";

// if (username) {
//     console.log("Hello" + username);
// }
// else{
//     console.log("please input username");
// }

// const condition = false; // false murni

// const age = 20;

if (0 == '') {
    //true, knp bisa true karena age = 20 dan angka diatas atau dibawah 0 itu adalah true
    console.log("masuk if");
}

// // cara cek nya 
// console.log(Boolean(age)); //ini yang disebut truthy

// notes:
// 1. apa itu truthy? truthy adalah boolean yang mendekati true
// 2. begitu jg falsy ialah kebalikannya dari truthy
// 3. jika condition di if itu biasanya menggunakan comparison atau lainnya agar menghasilkan boolean tpi condition jg bisa diisi dengan variabel yang bervalue tetapi value tersebut alangkah baiknya di cek dahulu menggunakan (Boolean(nama variabel)) misal 0 itu adalah false dan 1 adalah true atau tanda "" adalah false dan " " adalah true 
// NaN itu adalah not a number jika dijadikan boolean menghasilkan false
// null menghasilkan false
// 0 menghasilkan false
// "" atau '' atau `` menghasilkan false
// " " menghasilkan true