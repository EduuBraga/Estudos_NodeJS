require('dotenv').config();
const app = require('./app');
const startDB = require('./configs/mongodb');
const PORT = 3000;

startDB();

app.listen(process.env.PORT || PORT, () => console.log('Server running'));