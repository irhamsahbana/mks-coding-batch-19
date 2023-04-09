const prompt = require('prompt-sync')()

let jam = prompt('Sekarang jam berapa? ')

if (jam < 18) {
  let ucapan = "Selamat Siang"
  console.log(ucapan)
}
