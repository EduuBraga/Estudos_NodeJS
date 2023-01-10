const routes = require('express').Router();
const auth = require('../controllers/authController')

routes.get('/', auth, (req, res) => {
  if (req.user.admin) {
    res.send('Esse dados só pode sr visto por um admin');
  }else {
    res.status(401).send('Não é admin: Acesso negado');
  }
});

module.exports = routes;