const prompt = require('prompt-sync')();

let bilangan = prompt('Masukkan bilangan: ');
console.log('Faktor dari bilangan ' + bilangan);

let angka = 1;
while (angka <= bilangan) {
  if (bilangan % angka === 0) {
    console.log(angka);
  }
  angka++;
}
