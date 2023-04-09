const prompt = require('prompt-sync')();

let bilangan = prompt('Masukkan bilangan: ');
console.log('Faktor dari bilangan ' + bilangan);

// for (let angka = 1; angka <= bilangan; angka++) {
//   if (bilangan % angka === 0) { // = = =
//     console.log(angka)
//   }
// }

let angka = 1;
while (angka <= bilangan) {
  if (bilangan % angka === 0) {
    console.log(angka);
  }
  angka++;
}