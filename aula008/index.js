const HTTP = require('http');
const URL = require('url');
const FS = require('fs');

const handleFile = (req, res, callback) => {
  let path = URL.parse(req.url).pathname;
  let pathIsEmpty = ['', '/'].includes(path)

  if (pathIsEmpty) { path = '/index.html'; }

  let fileName = `.${path}`;

  callback(fileName, res, path)
}

const handleContentResponse = (res, content) => {
    res.writeHead(200, { 'Content-type': 'text/plain;charset=utf-8' })
    res.end(content)
}

const handleRequest = (path, res) => {
  switch (path) {
    case '/test1':
      handleContentResponse(res, 'Página de teste 1.')
      return true
    case '/test2':
      handleContentResponse(res, 'Página de teste 2.')
      return true
    default:
      return false
  }
}

const handleResponse = (fileName, res, path) => {
  FS.readFile(fileName, (error, data) => {
    if (error) {
      if (handleRequest(path, res)) { return null }

      res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' });
      res.end("<h1>Página não encontrada</h1>");
    } else {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      res.end();
    }
  })
}

HTTP.createServer((req, res) => {
  handleFile(req, res, handleResponse)
}).listen(3000, error => {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor rodando na porta 3000");
  }
});