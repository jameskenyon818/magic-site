const https = require('https');

const BASE_URL = 'https://jameskenyonmagic.com';

// List of main pages to check
const pages = [
  '/',
  '/about',
  '/contact',
  '/cities/dallas-magician',
  '/cities/los-angeles-magician',
  '/cities/new-york-magician'
];

// Check if a URL returns a 200 status
function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`${url}: ${res.statusCode === 200 ? '✅ Working' : '❌ Broken'}`);
      resolve();
    }).on('error', () => {
      console.log(`${url}: ❌ Error - Could not connect`);
      resolve();
    });
  });
}

async function main() {
  console.log('🔍 Checking for broken links...\n');
  
  for (const page of pages) {
    await checkUrl(`${BASE_URL}${page}`);
  }
}

main().catch(console.error); 