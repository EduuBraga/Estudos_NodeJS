const HTTP = require('http');
const URL = require('url');
const FS = require('fs');

HTTP.createServer((req, res) => {
  let path = URL.parse(req.url).pathname;
  if(path === '' || path === '/'){
    path = '/index.html';
  }

  const fileName = `.${path}`;

  FS.readFile(fileName, (error, data) => {
    if(error){
      res.writeHead(404, {'Content-type': 'text/html'});
      res.end("<h1>Página não encontrada</h1>");
    }else{
      res.writeHead(200, {'Content-type': 'text/html'});
      res.write(data);
      res.end();
    }
  })

}).listen(3000, error => {
  if(error){
    console.log(error);
  }else{
    console.log("Servidor rodando na porta 3000");
  }
});