// soal
// Buatlah suatu code looping yang bisa membuat pola dibawah ini

//     #   
//    ###   
//   #####  
//  #######
// #########


let baris = 5;
for (let i = 1; i <= baris; i++) {
    
    let hasil = "";
    //mencetak spasi
    for (let j = 1; j <= baris - i; j++) {
        
        hasil += " ";

    }
    //mencetak simbol
    for (let k = 1; k <= 2 * i - 1; k++) {
        
        hasil += "#";

    }
    console.log(hasil)
}