const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/example', function(req, res) {
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

  res.render('example', data);
});

app.get('/partial-example', function(req, res) {
  let data = {
    title: "Contoh Bootstrap",
    name: "Rizky",
    yearOfBirth: 1998,
    hobbies: [
      "sport",
      "reading",
      "drink coffee"
    ],
    isGraduate: true
  }

  res.render('pages/page-01', data);
});

app.listen(port, function(){
  console.log(`Example app listening on port http://localhost:${port}`);
});