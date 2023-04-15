const route = require('express').Router();

route.get('/', function(req, res) {
  res.render('pages/home.ejs');
});

route.get('/about', function(req, res) {
  res.send('About Page');
});

route.get('/contact', function(req, res) {
  res.send('Contact Page');
});

module.exports = route;