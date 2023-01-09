const mongoose = require('mongoose');
const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apiauthuser.ibgxfs0.mongodb.net/users?retryWrites=true&w=majority`;

const startDB = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(URL)
    .then(_ => console.log('Banco carregado'))
    .catch(err => console.log(err));
};

module.exports = startDB;