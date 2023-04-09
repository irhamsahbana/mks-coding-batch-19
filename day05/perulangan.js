// console.log("Ini angka ke 1");
// console.log("Ini angka ke 2");
// console.log("Ini angka ke 3");
// console.log("Ini angka ke 4");
// console.log("Ini angka ke 5");
// console.log("Ini angka ke 6");
// console.log("Ini angka ke 7");
// console.log("Ini angka ke 8");
// console.log("Ini angka ke 9");
// console.log("Ini angka ke 10");

const prompt = require('prompt-sync')();

let jumlahPerulangan = prompt('Berapa kali perulangan? ');

// for (let angka = 1; angka <= jumlahPerulangan; angka++) {
//   console.log("Ini angka ke " + angka);
// }

let angka = 1;
while (angka <= jumlahPerulangan) {
  console.log("Ini angka ke " + angka);
  angka++;
}