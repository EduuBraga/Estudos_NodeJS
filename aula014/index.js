const express = require('express')
const path = require('path')

const server = express()
const PORT = 3000

const users = [
  {
    name: 'Eduardo braga',
    username: 'EduuBraga',
    email: 'eduardo.braga467@gmail.com'
  }, {
    name: 'Yasmim binbin',
    username: 'YasmimBinBin',
    email: 'Yasmim.binbin@gmail.com'
  }, {
    name: 'Pablo vasconcelhos',
    username: 'Palo123',
    email: 'Pablo.vasconcelhos@gmail.com'
  }
]

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('user', { users })
})

server.listen(PORT, () => console.log("Server running on PORT", 3000))