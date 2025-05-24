const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Convert edit.png to edit.webp
sharp(path.join(publicDir, 'images/edit.png'))
  .webp({ quality: 80 })
  .toFile(path.join(publicDir, 'images/edit.webp'))
  .then(() => console.log('Converted edit.png to edit.webp'))
  .catch(err => console.error('Error converting edit.png:', err));

// Convert edit.png to hero.webp (since it's the same image)
sharp(path.join(publicDir, 'images/edit.png'))
  .webp({ quality: 80 })
  .toFile(path.join(publicDir, 'images/hero.webp'))
  .then(() => console.log('Converted edit.png to hero.webp'))
  .catch(err => console.error('Error converting to hero.webp:', err)); 