#!/usr/bin/env node

/**
 * Mobile Testing Script
 * 
 * This script helps you test mobile responsiveness locally
 * Run with: node scripts/mobile-test.js
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('📱 Mobile Responsiveness Testing Helper\n');

// Check if Next.js dev server is running
function isDevServerRunning() {
  try {
    execSync('curl -s http://localhost:3000 > /dev/null', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Start dev server if not running
if (!isDevServerRunning()) {
  console.log('🚀 Starting Next.js development server...');
  try {
    execSync('npm run dev', { stdio: 'inherit', cwd: process.cwd() });
  } catch (error) {
    console.log('❌ Failed to start dev server. Please run "npm run dev" manually.');
  }
} else {
  console.log('✅ Development server is already running at http://localhost:3000');
}

console.log('\n📋 Mobile Testing Checklist:');
console.log('1. Open http://localhost:3000 in your browser');
console.log('2. Press F12 to open developer tools');
console.log('3. Click the device toggle icon (📱) or press Ctrl+Shift+M');
console.log('4. Test these common mobile devices:');
console.log('   - iPhone SE (375x667)');
console.log('   - iPhone 12 Pro (390x844)');
console.log('   - Galaxy S20 Ultra (412x915)');
console.log('   - iPad (768x1024)');
console.log('');

console.log('🔍 Key Areas to Test:');
console.log('✅ Navigation menu works on mobile');
console.log('✅ Text is readable without zooming');
console.log('✅ Buttons are large enough to tap (44px minimum)');
console.log('✅ Images scale properly');
console.log('✅ Forms are usable on mobile');
console.log('✅ No horizontal scrolling');
console.log('✅ Video players work on mobile');
console.log('✅ Contact information is easily accessible');
console.log('');

console.log('🛠️  Quick Mobile Fixes:');
console.log('1. Add viewport meta tag: <meta name="viewport" content="width=device-width, initial-scale=1.0" />');
console.log('2. Use mobile-first CSS: Start with mobile styles, then add larger breakpoints');
console.log('3. Test touch interactions: Ensure buttons work with finger taps');
console.log('4. Optimize images: Use responsive images with srcset');
console.log('5. Check loading speed: Mobile users expect fast loading');
console.log('');

console.log('📊 Online Testing Tools:');
console.log('- Google PageSpeed Insights: https://pagespeed.web.dev/');
console.log('- BrowserStack: https://www.browserstack.com/');
console.log('- Responsive Design Checker: https://responsivedesignchecker.com/');
console.log('- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly');
console.log('');

console.log('🎯 Common Mobile Issues & Solutions:');
console.log('Issue: Text too small');
console.log('Solution: Use responsive text classes like text-base sm:text-lg md:text-xl');
console.log('');
console.log('Issue: Buttons too small to tap');
console.log('Solution: Add min-height: 44px and min-width: 44px');
console.log('');
console.log('Issue: Horizontal scrolling');
console.log('Solution: Check for fixed widths, use max-width: 100% on images');
console.log('');
console.log('Issue: Navigation not working');
console.log('Solution: Implement proper mobile menu with touch-friendly buttons');
console.log('');

console.log('✨ Happy mobile testing! Remember: Mobile-first design is key to success.');

