const fs = require('fs');
const path = require('path');

// List of required images
const requiredImages = [
  '/images/hero.webp',
  '/images/edit.webp',
  '/images/edit5.png',
  '/images/thumbtack 2.jpg',
  '/images/IMG_5401.JPG'
];

// Get the public directory path
const publicDir = path.join(__dirname, '../public');

// Check if each required image exists
const missingImages = requiredImages.filter(imagePath => {
  const fullPath = path.join(publicDir, imagePath);
  return !fs.existsSync(fullPath);
});

if (missingImages.length > 0) {
  console.error('❌ Missing required images:');
  missingImages.forEach(image => console.error(`   - ${image}`));
  process.exit(1);
} else {
  console.log('✅ All required images are present');
} 