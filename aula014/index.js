const express = require('express')
const FS = require('fs')
const path = require('path')

const server = express()
const PORT = 3000

const user = {
  name: 'Eduardo braga',
  username: 'EduuBraga',
  email: 'eduardo.braga467@gmail.com'
}

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('user', user)
})

server.listen(PORT, () => console.log("Server running on PORT", 3000))