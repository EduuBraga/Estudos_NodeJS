const express = require('express')

const app = express()

const logMethod = (req, res, next) => {
  console.log(req.method)
  next()
}

const setHello = (req, res) => {
  res.send('<h1>Hello world</h1>')
}

app.use('/', logMethod)

app.get('/', setHello)
app.post('/', setHello)

app.listen(3000, () => console.log('Server rodando'))