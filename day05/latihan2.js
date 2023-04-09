const prompt = require('prompt-sync')();

let bilangan = prompt('Masukkan bilangan: ');

let angka = 1;
let jumlahFaktor = 0;
while (angka <= bilangan) {
  if (bilangan % angka === 0) {
    jumlahFaktor++;
  }
  angka++;
}

if (jumlahFaktor === 2) {
  console.log('bilangan prima');
} else {
  console.log('bukan bilangan prima');
}