const express = require('express')
const FS = require('fs')

const server = express()
const PORT = 3000

const user = {
  id: 7,
  name: 'Eduardo Braga',
  username: 'EduuBraga'
}

server.get('/', (req, res) => {
  FS.readFile('./templates/templateInitial.html', 'UTF8', (err, data) => {
    if (!err) {
      for (const key in user) {
        if(data.includes(`{{${key}}}`)){
          data = data.replace(`{{${key}}}`, user[key])
        }
      }

      res.send(data)
    }
  })
})

server.listen(PORT, () => console.log('Server running on PORT', PORT))
