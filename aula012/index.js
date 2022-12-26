const express = require('express');
const bodyParser = require('body-parser');
const routersStudent = require('./routers/students.js');
const routersTeacher = require('./routers/teachers.js');

const server = express();
const PORT = 3000;

server.use(bodyParser.urlencoded());

server.get('/', (req, res) => {
  res.send('Hello world!');
});

server.use('/student', routersStudent);
server.use('/teacher', routersTeacher);

server.listen(PORT, () => console.log('Server tá on...'));