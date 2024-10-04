//LOOPING

let i = 0;
while (i < 5) {
    if (i === 3) {
        i++;
        continue;
    }

    console.log("masuk while")
    console.log("i = " + i);

    i++
}

// notes:
// 1. perbedaan antara while dan for adalah di condition klo for bisa mendeklarasi di dalam condition sendangkan while bisa delarasi terlebih dahulu sebelum memulai while