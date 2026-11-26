#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

interface LinkCheckResult {
  href: string;
  exists: boolean;
  files: string[];
}

async function checkInternalLinks() {
  console.log('🔍 Checking internal links...\n');
  
  // Get all .tsx and .mdx files
  const files = await glob('**/*.{tsx,mdx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  const hrefRegex = /href=["'](\/[^"']*)["']/g;
  const linkMap = new Map<string, string[]>();
  
  // Extract all hrefs from files
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let match;
      
      while ((match = hrefRegex.exec(content)) !== null) {
        const href = match[1];
        if (href.startsWith('/')) {
          if (!linkMap.has(href)) {
            linkMap.set(href, []);
          }
          linkMap.get(href)!.push(file);
        }
      }
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  }

  // Get all existing routes from app directory
  const appRoutes = await getAppRoutes();
  
  // Check which links exist
  const results: LinkCheckResult[] = [];
  for (const [href, files] of linkMap) {
    const exists = appRoutes.includes(href) || appRoutes.includes(href + '/');
    results.push({ href, exists, files });
  }

  // Sort results
  results.sort((a, b) => a.href.localeCompare(b.href));

  // Print results
  console.log('📊 Internal Link Check Results:');
  console.log('='.repeat(80));
  console.log(`${'HREF'.padEnd(40)} ${'EXISTS'.padEnd(8)} ${'FILES'}`);
  console.log('-'.repeat(80));
  
  let brokenCount = 0;
  for (const result of results) {
    const status = result.exists ? '✅ Y' : '❌ N';
    const filesStr = result.files.slice(0, 2).join(', ') + 
      (result.files.length > 2 ? ` (+${result.files.length - 2} more)` : '');
    
    console.log(`${result.href.padEnd(40)} ${status.padEnd(8)} ${filesStr}`);
    
    if (!result.exists) {
      brokenCount++;
    }
  }
  
  console.log('-'.repeat(80));
  console.log(`Total links: ${results.length}`);
  console.log(`Broken links: ${brokenCount}`);
  
  if (brokenCount > 0) {
    console.log('\n❌ Found broken internal links!');
    process.exit(1);
  } else {
    console.log('\n✅ All internal links are valid!');
  }
}

async function getAppRoutes(): Promise<string[]> {
  const routes: string[] = ['/']; // Root route
  
  try {
    // Get all page files
    const pageFiles = await glob('app/**/page.{tsx,mdx}', {
      ignore: ['node_modules/**', '.next/**', 'dist/**']
    });

    for (const file of pageFiles) {
      let route = file
        .replace('app/', '/')
        .replace('/page.tsx', '')
        .replace('/page.tsx', '');
      
      // Handle dynamic routes
      if (route.includes('[city]')) {
        // Add some example city routes
        const cities = ['atlanta-magician', 'austin-magician', 'chicago-magician', 'dallas-magician'];
        for (const city of cities) {
          routes.push(route.replace('[city]', city));
        }
      } else if (route.includes('[slug]')) {
        // Add some example blog routes
        const blogSlugs = ['booth-script-schedule-demos', 'draw-a-crowd-trade-show', 'live-demos-vs-giveaways'];
        for (const slug of blogSlugs) {
          routes.push(route.replace('[slug]', slug));
        }
      } else {
        routes.push(route);
      }
    }

    // Add API routes
    const apiFiles = await glob('app/api/**/route.ts', {
      ignore: ['node_modules/**', '.next/**', 'dist/**']
    });

    for (const file of apiFiles) {
      const route = file
        .replace('app/api', '/api')
        .replace('/route.ts', '');
      routes.push(route);
    }

  } catch (error) {
    console.error('Error getting app routes:', error);
  }

  return [...new Set(routes)].sort();
}

// Run the check
checkInternalLinks().catch(console.error);
