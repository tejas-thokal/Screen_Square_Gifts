const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputFolder = './assets';  
const outputFolder = './converted';

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    sharp(`${inputFolder}/${file}`)
      .webp({ quality: 80 })
      .toFile(`${outputFolder}/${path.parse(file).name}.webp`)
      .then(() => console.log(`Converted ${file} → .webp`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
