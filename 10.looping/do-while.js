// let i = 0;

// do {
//     console.log("masuk do while");    
//     i++;
// } while (i < 5); // jika condition false maka tetap akan mencetak console.log 1 kali

// notes :
// 1. perbedaan antara do while dengan while adalah kalau do while dia mengeksekusi dahulu 1 kali baru dimulai loopingnya sedangkan while langsung mengeksekusi looping

let baris = 5;
for (let i = 1; i <= baris; i++) {
    
    let hasil = "";
    //mencetak spasi
    for (let j = 1; j <= baris - i; j++) {
        
        hasil += "1";

    }
    //mencetak simbol
    for (let k = 1; k <= 2 * i - 1; k++) {
        
        hasil += "#";

    }
    console.log(hasil)
}