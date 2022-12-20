const sharp = require('sharp')
const compress_images = require('compress-images')
const fs = require('fs')

console.log(compress_images)
const imgFile = process.argv[2]
const width = Number(process.argv[3])

const resizeImg = (pathInput, pathOutput, width) => {
  sharp(pathInput)
    .resize({ width: width })
    .toFile(pathOutput, error => {
      if (error) {
        console.log(error)
        return
      }

      console.log('Imagem redimensionada com sucesso!')
      compress(pathOutput, '/compress/')
    })
}

const compress = (pathInput, pathOutput) => {
  compress_images(pathInput, pathOutput, 
    { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    (error, completed, statistic) => {
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");

      fs.unlink(pathInput, error => {
        if(error){
          console.log(error)
        }else{
          console.log(`${pathInput} excluído com sucesso!`)
        }
      })
    }
  );
}

resizeImg(imgFile, './temp/imgTest1.jpg', width)