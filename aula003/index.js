const fs = require('fs')

const args = process.argv.slice(2)

const [typeFunc, file, secondArgumentFile] = args;

switch (typeFunc) {
  case 'rename':
    fs.rename(file, secondArgumentFile, error => {
      if (error) { throw error };

      console.log("Arquivo renomeado com sucesso!")
    })
    break;
  case 'write':
    fs.writeFile(file, secondArgumentFile, error => {
      if (error) { throw error };

      console.log("Arquivo criado/reescrevido com sucesso!")
    })
    break;
  case 'append':
    fs.appendFile(file, secondArgumentFile, error => {
      if (error) { throw error };

      console.log("Arquivo atualizado com sucesso!")
    })
    break;
  case 'read':
    fs.readFile(file, secondArgumentFile, (error, data) => {
      if (error) { throw error };

      console.log(`Estes são os dados do arquivo: ${data}`)
    })
    break;
  case 'unlink':
    fs.unlink(file, secondArgumentFile, error => {
      if (error) { throw error };

      console.log("Arquivo removido com sucesso!")
    })
    break;
  default:
    console.log("Método não especificado.")
    break;
}
