const express = require('express');
const path = require('path');

const app = express()
const PORT = 3000

app.use('/coldlandia', express.static(path.join(__dirname, '')))

app.post('/', (req, res) => {
  res.send('Hello people from POST')
})

app.put('/', (req, res) => {
  res.send('Hello people from PUT')
})

app.delete('/', (req, res) => {
  res.send('Hello people from DELETE')
})

app.get('/', (req, res) => {
  res.type('json')
  res.send('{"name": "Eduardo", "age": 19}')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`)
})