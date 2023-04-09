const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/contoh-pertama', function(req, res) {
  let data = {
    name: "Rizky",
    yearOfBirth: 1998,
    hobbies: [
      "sport",
      "reading",
      "drink coffee"
    ],
    isGraduate: true
  }

  res.render('contoh1', data);
});

app.get('/contoh-kedua', function(req, res) {
  res.render('anak-folder/contoh2');
});

app.listen(port, function(){
  console.log(`Example app listening on port http://localhost:${port}!`);
});