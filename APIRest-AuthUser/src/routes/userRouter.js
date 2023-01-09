const routes = require('express').Router();

routes.post('/register', (req, res) => {
  res.send('register');
});

routes.post('/login', (req, res) => {
  console.log('deu certo')
  res.send('Login');
});

module.exports = routes;