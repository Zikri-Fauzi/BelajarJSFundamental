const myAnswer = "C";

switch (myAnswer) {
    case "A":
        console.log("jawaban anda salah!");
        break;
    case "B":
        console.log("jawaban anda salah!");
        break;
    case "C":
        console.log("jawaban anda benar!");
        break;
    case "D":
        console.log("jawaban anda salah!");
        break;
    
        
    default:
        console.log("Input jawaban salah");
        break;
}

// notes : 
// 1.break itu agar setelah kondisi salah satu case terpenuhi dia akan langsung keluar dari conditions tersebut dan melanjutkan kode dibawahnya
// 2.perbedaan antara if dan switch adalah :
//     if bisa lebih leluasa mengatur suatu kondisinya 
    
//     switch hanya bisa mengatur kondisi sesuai case yang ada atau lebih tepatnya seperti pilihan ganda 
// 3.default itu hampir mirip seperti else yg dimana dia akan diproses jika semua kondisi diatasnya tidak terpenuhi