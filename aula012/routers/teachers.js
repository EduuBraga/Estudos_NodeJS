const express = require('express');
const router = express.Router();
const dataSchool = require('../data.js');

router.get('/all', (req, res) => {
  const JSONTeachers = JSON.stringify(dataSchool.teachers);
  res.json(JSONTeachers);
});

router.get('/', (req, res) => {
  const idParam = Number(req.body.id)

  const teacherFiltered = dataSchool.teachers
    .filter(teacher => teacher.id === idParam)

  const teacherJSON = JSON.stringify(teacherFiltered)
  res.json(teacherJSON)
})

router.get('/:id', (req, res) => {
  const idReq = Number(req.params.id);

  const teacherFiltered = dataSchool.teachers
    .filter(teacher => teacher.id === idReq);

  const teacherJSON = JSON.stringify(teacherFiltered);
  res.json(teacherJSON)
})

module.exports = router;