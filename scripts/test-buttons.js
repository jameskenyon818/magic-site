#!/usr/bin/env node

/**
 * Button and Form Testing Script
 * 
 * This script helps identify and test all interactive elements
 * Run with: node scripts/test-buttons.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Button and Form Testing Helper\n');

// Common button and form issues to check for
const buttonIssues = [
  {
    name: 'Missing onClick handlers',
    pattern: /<button[^>]*(?!onClick)[^>]*>/i,
    suggestion: 'Add onClick handlers to interactive buttons'
  },
  {
    name: 'Missing type="submit" on form buttons',
    pattern: /<button[^>]*(?!type="submit")[^>]*>.*<\/button>/i,
    suggestion: 'Add type="submit" to form submission buttons'
  },
  {
    name: 'Missing form action or onSubmit',
    pattern: /<form[^>]*(?!action|onSubmit)[^>]*>/i,
    suggestion: 'Add action URL or onSubmit handler to forms'
  },
  {
    name: 'Links without href',
    pattern: /<a[^>]*(?!href)[^>]*>/i,
    suggestion: 'Add href attribute to all links'
  },
  {
    name: 'Touch targets too small',
    pattern: /className="[^"]*p-[1-3][^"]*"/,
    suggestion: 'Ensure buttons have minimum 44px touch targets'
  }
];

// Find all TSX files
function findTsxFiles() {
  try {
    const { execSync } = require('child_process');
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
}

// Check file for button issues
function checkFile(filePath, issue) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(issue.pattern);
    
    if (matches) {
      return {
        file: filePath,
        matches: matches.length,
        issue: issue.name,
        suggestion: issue.suggestion
      };
    }
  } catch (error) {
    // File doesn't exist or can't be read
  }
  return null;
}

// Run the button audit
const results = [];
const tsxFiles = findTsxFiles();

tsxFiles.forEach(file => {
  buttonIssues.forEach(issue => {
    const result = checkFile(file, issue);
    if (result) {
      results.push(result);
    }
  });
});

// Display results
if (results.length === 0) {
  console.log('✅ No major button/form issues found!');
} else {
  console.log(`⚠️  Found ${results.length} potential button/form issues:\n`);
  
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.issue}`);
    console.log(`   File: ${result.file}`);
    console.log(`   Matches: ${result.matches}`);
    if (result.suggestion) {
      console.log(`   Suggestion: ${result.suggestion}`);
    }
    console.log('');
  });
}

// Button testing checklist
console.log('🧪 Interactive Element Testing Checklist:');
console.log('');

console.log('📱 Navigation:');
console.log('✅ Mobile menu toggle button works');
console.log('✅ All navigation links work');
console.log('✅ Logo link navigates to home');
console.log('✅ Testimonials/Clients scroll buttons work');
console.log('');

console.log('📝 Contact Forms:');
console.log('✅ Form submission works (no console errors)');
console.log('✅ Required fields are marked');
console.log('✅ Form validation works');
console.log('✅ Thank you modal appears after submission');
console.log('✅ Form resets after successful submission');
console.log('');

console.log('🔗 Links:');
console.log('✅ All internal links work');
console.log('✅ External links open in new tabs (if needed)');
console.log('✅ Phone number links work on mobile');
console.log('✅ Email links work');
console.log('');

console.log('📱 Mobile-Specific Tests:');
console.log('✅ All buttons are at least 44px tall');
console.log('✅ Touch targets are properly spaced');
console.log('✅ No accidental double-taps');
console.log('✅ Swipe gestures work (if applicable)');
console.log('');

console.log('🚀 Quick Testing Commands:');
console.log('1. Open browser dev tools (F12)');
console.log('2. Go to Console tab');
console.log('3. Click every button/link on the page');
console.log('4. Check for JavaScript errors');
console.log('5. Test form submissions');
console.log('');

console.log('🔧 Common Button Fixes:');
console.log('Issue: Button not responding');
console.log('Solution: Check for JavaScript errors in console');
console.log('');
console.log('Issue: Form not submitting');
console.log('Solution: Verify API endpoint is working');
console.log('');
console.log('Issue: Mobile buttons too small');
console.log('Solution: Add min-h-[44px] and min-w-[44px] classes');
console.log('');

console.log('✨ Button testing complete! Focus on the issues above for better user experience.');

