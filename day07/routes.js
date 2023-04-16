const route = require('express').Router();
const models = require('./models/index');

// admin

route.get('/admin/contact-list', async function(req, res) {
  res.render('pages_admin/contacts.ejs');
});

route.get('/', async function(req, res) {
  res.render('pages/home.ejs');
});

route.get('/about', async function(req, res) {
  res.send('About Page');
});

route.get('/contact', async function(req, res) {
  res.render('pages/contact.ejs');
});

route.get('/admin-dashboard', async function(req, res) {
  res.render('pages_admin/dashboard.ejs');
});

route.post('/contact', async function(req, res) {

  const { name, email, message } = req.body;

  const data = {
    nama: name,
    email: email,
    pesan: message,
  };

  try {
    await models.addContact(data);

    res.redirect('/contact');
  } catch (error) {
    res.send(error);
  }
});

module.exports = route;