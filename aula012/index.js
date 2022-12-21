const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const dataSchool = {
  'students': [
    { id: 0, name: 'Lucas', age: 11 },
    { id: 1, name: 'Vivian', age: 9 },
    { id: 2, name: 'Maciel', age: 14 },
    { id: 3, name: 'Kaio', age: 17 },
  ],
  'teachers': [
    { id: 0, name: 'Luciano' },
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Zilse' },
    { id: 3, name: 'Francisca' },
  ]
}

server.use(bodyParser.urlencoded())

server.get('/', (req, res) => {
  res.send('Hello world!')
})

server.get('/students', (req, res) => {
  const JSONStudents = JSON.stringify(dataSchool.students)
  res.json(JSONStudents)
})

server.get('/student', (req, res) => {
  const idReq = Number(req.body.id)

  const studentFiltered = dataSchool.students
    .filter(student => student.id === idReq)

  const JSONStudents = JSON.stringify(studentFiltered)
  res.json(JSONStudents)
})

server.get('/student/:id', (req, res) => {
  const idReq = Number(req.params.id)

  const studentFiltered = dataSchool.students
    .filter(student => student.id === idReq)

  const JSONStudents = JSON.stringify(studentFiltered)
  res.json(JSONStudents)
})

server.get('/teachers', (req, res) => {
  const JSONTeachers = JSON.stringify(dataSchool.teachers)
  res.json(JSONTeachers)
})

server.listen(3000, () => console.log('Server tá on...'))