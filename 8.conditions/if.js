const price = 10000;
const payment = 12000;

// 1.kalau uangnya pas 
if (price === payment) {
    console.log("Makasih sudah bayar pakai uang pas");
}
// 2.ketika uangnya lebih
else if (payment > price){
    const change = payment - price;
    console.log(`Terima kasih, kembalian anda sebesar ${change}`);
}
// 3.jika semua kondisi diatas tidak terpenuhi
else {
    const moneyDefisit = price - payment;
    console.log(`Maaf uang anda kurang ${moneyDefisit}`);
}

// notes : hanya if yg bisa berdiri sendiri