const sharp = require('sharp')

const imgFile = process.argv[2]
const width = Number(process.argv[3])

const resizeImg = (img, width) => {
  sharp(img)
    .resize({width: width})
    .toFile('./temp/imgTest1.jpg', (error) => {
      if(error) {
        console.log(error.message)
      }

      console.log('Imagem redimensionada com sucesso!')
    })
}

resizeImg(imgFile, width)