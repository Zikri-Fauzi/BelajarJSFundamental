// loop -> if condition yang berulang selama condition masih true 

// segment 1 -> dieksekusi sebelum loop jalan (satu kali aja) biasanya deklarasi variabel
// segment 2 -> CONDITION (true|false)
// segment 3 -> dieksekusi diakhir setiap iterasi/pengulangan

// for (let i = 0; i < 5; i++) {
    
//     if (i === 3) {
//         // break; // BERHENTIIN KESELURUHAN LOOP
//         // continue; // BERHENTIIN ITERASI / PENGULANGAN SAAT INI AJA  
//     }
//     console.log("Masuk Loop");
//     console.log("i =" + i);

// }

//LOOPING DI DALAM LOOPING

for (let i = 0; i < 5; i++) {
    console.log("i = " + i);

    for (let z = 0; z < 3; z++) {
        console.log("z = " + z);
    }
}
