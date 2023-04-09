const prompt = require('prompt-sync')();

let nilaiA = prompt('Masukkan nilai A: ');
let nilaiB = prompt('Masukkan nilai B: ');

for (let angka = 1; angka <= nilaiA; angka++) {
 if (angka % nilaiB === 0) {
   console.log('*');
 } else {
    console.log(angka);
 }
}