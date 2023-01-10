const JWT = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('authorization-token');
  if(!token) return res.status(401).send('Acesso negado')

  try {
    const userVerified = JWT.verify(token, process.env.SECRET_TOKEN_KEY);
    req.user = userVerified;
    next();
  } catch (error) {
    res.status(401).send('Acesso negado')
  }
}

module.exports = auth;