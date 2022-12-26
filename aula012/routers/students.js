const express = require('express');
const router = express.Router();
const dataSchool = require('../data.js');

router.get('/all', (req, res) => {
  const JSONStudents = JSON.stringify(dataSchool.students);
  res.json(JSONStudents);
});

router.get('/', (req, res) => {
  const idReq = Number(req.body.id);

  const studentFiltered = dataSchool.students
    .filter(student => student.id === idReq);

  const JSONStudents = JSON.stringify(studentFiltered);
  res.json(JSONStudents);
});

router.get('/:id', (req, res) => {
  const idReq = Number(req.params.id);

  const studentFiltered = dataSchool.students
    .filter(student => student.id === idReq);

  const JSONStudents = JSON.stringify(studentFiltered);
  res.json(JSONStudents);
});

module.exports = router;