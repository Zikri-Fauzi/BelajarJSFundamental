const names = ["Zikri", "Naruto", "Doraemon"];

names.push("Sasuke"); // .push untuk menambah value baru kedalam array

// names.pop();   untuk menghapus atau mengambil dan mereturn index terakhir
// names.splice(1,2); untuk menghapus items di array tanpa meninggalkan lubang pada array
names.splice(1, 2, "lemon", "kiwi"); //.splice untuk menghapus value didalam array untuk (1, 2) 1 itu adalah index dimulainya menghapus dan 2 adalah jumlah value yang akan dihapus  bisa juga menambah array dengan cara names.splice(1, 2, "lemon", "kiwi")

// names.length untuk menampilkan panjang array

// names.reverse(); untuk mereverse index 

// names[index] = value;   untuk mengganti value didalam array sesuai index yang diminta

// names.shift();   untuk menghapus atau mengambil dan mereturn index terdepan

// names.unshift();   untuk menambah value di index terdepan

console.log(names);

// Array didalam Array

// const grid = [
//     [1, 2, 3], // index 0
//     [4, 5, 6], // index 1
//     [7, 8, 9]  // index 2
// ];


// console.log(grid[1][1]); // [] pertama untuk index didalam array pertama, [] kedua untuk index didalam array kedua  
