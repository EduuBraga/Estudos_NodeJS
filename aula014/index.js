const express = require('express')
const FS = require('fs')
const path = require('path')

const server = express()
const PORT = 3000

server.set('views', path.join(__dirname, 'views'))

server.get('/', (req, res) => {

})

server.listen(PORT, () => console.log("Server running on PORT", 3000))