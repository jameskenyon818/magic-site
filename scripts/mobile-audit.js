#!/usr/bin/env node

/**
 * Mobile Responsiveness Audit Script
 * 
 * This script helps identify and fix common mobile responsiveness issues
 * Run with: node scripts/mobile-audit.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Starting Mobile Responsiveness Audit...\n');

// Common mobile responsiveness issues to check for
const mobileIssues = [
  {
    name: 'Missing viewport meta tag',
    pattern: /<meta[^>]*viewport[^>]*>/i,
    fix: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    files: ['app/layout.tsx']
  },
  {
    name: 'Fixed width elements without responsive classes',
    pattern: /className="[^"]*w-\d+[^"]*"/,
    suggestion: 'Consider using responsive width classes like w-full sm:w-auto'
  },
  {
    name: 'Large text without responsive sizing',
    pattern: /className="[^"]*text-[4-9]xl[^"]*"/,
    suggestion: 'Consider using responsive text classes like text-2xl sm:text-4xl md:text-6xl'
  },
  {
    name: 'Fixed padding without responsive variants',
    pattern: /className="[^"]*p-[4-9][^"]*"/,
    suggestion: 'Consider using responsive padding like p-4 sm:p-6 md:p-8'
  },
  {
    name: 'Missing mobile breakpoints',
    pattern: /className="[^"]*(?!.*(?:sm:|md:|lg:|xl:))[^"]*"/,
    suggestion: 'Consider adding mobile-first responsive classes'
  }
];

// Files to check
const filesToCheck = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'components/**/*.tsx'
];

function findFiles(pattern) {
  try {
    const result = execSync(`find . -name "*.tsx" -o -name "*.ts" | grep -E "${pattern.replace('**', '.*')}"`, { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
}

function checkFile(filePath, issue) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(issue.pattern);
    
    if (matches) {
      return {
        file: filePath,
        matches: matches,
        issue: issue.name,
        suggestion: issue.suggestion
      };
    }
  } catch (error) {
    // File doesn't exist or can't be read
  }
  return null;
}

// Run the audit
const results = [];

// Check specific files for viewport meta tag
const layoutFile = 'app/layout.tsx';
if (fs.existsSync(layoutFile)) {
  const issue = mobileIssues[0]; // viewport meta tag issue
  const result = checkFile(layoutFile, issue);
  if (result) {
    results.push(result);
  }
}

// Check all TSX files for common issues
const tsxFiles = findFiles('**/*.tsx');
tsxFiles.forEach(file => {
  mobileIssues.slice(1).forEach(issue => {
    const result = checkFile(file, issue);
    if (result) {
      results.push(result);
    }
  });
});

// Display results
if (results.length === 0) {
  console.log('✅ No major mobile responsiveness issues found!');
} else {
  console.log(`⚠️  Found ${results.length} potential mobile responsiveness issues:\n`);
  
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result.issue}`);
    console.log(`   File: ${result.file}`);
    if (result.suggestion) {
      console.log(`   Suggestion: ${result.suggestion}`);
    }
    console.log('');
  });
}

// Generate mobile-first CSS recommendations
console.log('📱 Mobile-First CSS Recommendations:');
console.log('1. Always start with mobile styles first');
console.log('2. Use responsive prefixes: sm:, md:, lg:, xl:');
console.log('3. Test on actual devices, not just browser dev tools');
console.log('4. Ensure touch targets are at least 44px');
console.log('5. Use relative units (rem, em, %) instead of fixed pixels');
console.log('6. Test with different screen orientations');
console.log('');

// Generate Tailwind responsive class examples
console.log('🎨 Common Tailwind Responsive Patterns:');
console.log('Text sizing: text-base sm:text-lg md:text-xl lg:text-2xl');
console.log('Spacing: p-4 sm:p-6 md:p-8 lg:p-12');
console.log('Layout: grid-cols-1 sm:grid-cols-2 md:grid-cols-3');
console.log('Width: w-full sm:w-auto md:w-1/2 lg:w-1/3');
console.log('Display: hidden sm:block md:flex');
console.log('');

console.log('🚀 To test mobile responsiveness:');
console.log('1. Use browser dev tools device simulation');
console.log('2. Test on actual mobile devices');
console.log('3. Use online tools like BrowserStack');
console.log('4. Check Google PageSpeed Insights mobile score');
console.log('');

console.log('✨ Audit complete! Focus on the issues above for better mobile experience.');

