const HTTP = require('http');

HTTP.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'application/json' });
  response.end('{"text": "Hello world!"}')

}).listen(3000, error => {
  if (error) {
    console.log(error)
  }

  console.log("Servidor rodando na porta 3000")
})