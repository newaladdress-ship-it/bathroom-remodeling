/**
 * Automated SEO Compliance Check Script
 * Scans the built HTML files in the out/ directory and enforces compliance rules.
 * Run: node scripts/verify-seo-compliance.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, '../out');

console.log('🔍 STARTING AUTOMATED SEO COMPLIANCE VERIFICATION...\n');
console.log('='.repeat(80));

function getHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

if (!fs.existsSync(OUT_DIR)) {
  console.error(`❌ Output directory ${OUT_DIR} does not exist. Run npm run build first.`);
  process.exit(1);
}

const htmlFiles = getHtmlFiles(OUT_DIR);
console.log(`📊 Scanning ${htmlFiles.length} HTML files...\n`);

let failedFiles = 0;
let totalChecks = 0;
let totalViolations = 0;

htmlFiles.forEach(filePath => {
  const relPath = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  
  // Skip admin pages from standard search compliance rules since they are disallowed in robots.txt
  if (relPath.startsWith('admin') || relPath.includes('admin/')) {
    return;
  }
  
  // Skip 404 pages
  if (relPath.includes('404.html')) {
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip non-indexable or redirecting pages
  const isNoIndex = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(content);
  const isRedirect = content.includes('This page has moved.') || content.includes('window.location.replace');
  if (isNoIndex || isRedirect) {
    return;
  }
  
  const violations = [];
  
  // 1. Single H1 Rule
  const h1Regex = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
  const h1Matches = [];
  let match;
  while ((match = h1Regex.exec(content)) !== null) {
    h1Matches.push(match[1].trim());
  }
  totalChecks++;
  if (h1Matches.length === 0) {
    violations.push({ rule: 'Single H1 Rule', message: 'No <h1> tag found on the page' });
  } else if (h1Matches.length > 1) {
    violations.push({ rule: 'Single H1 Rule', message: `Multiple <h1> tags found (${h1Matches.length}): ${h1Matches.map(h => `"${h}"`).join(', ')}` });
  }

  // 2. Heading Hierarchy Checks (e.g., no jumping from h1 to h3)
  const headingRegex = /<h(1|2|3|4|5|6)\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  const headings = [];
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({ level: parseInt(match[1]), text: match[2].trim().replace(/<[^>]*>/g, '') });
  }
  
  totalChecks++;
  let lastLevel = 0;
  for (let i = 0; i < headings.length; i++) {
    const { level, text } = headings[i];
    // Jump check: Going deeper must not skip a level (e.g., level > lastLevel + 1)
    if (lastLevel > 0 && level > lastLevel + 1) {
      violations.push({
        rule: 'Heading Hierarchy',
        message: `Heading level jumped from <h${lastLevel}> to <h${level}> at "${text}" (recommend consecutive levels)`
      });
    }
    lastLevel = level;
  }

  // 3. Automated Canonical Tags
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  totalChecks++;
  if (!canonicalMatch) {
    violations.push({ rule: 'Canonical Tags', message: 'Missing <link rel="canonical"> tag in <head>' });
  } else {
    const canonicalHref = canonicalMatch[1];
    
    // Calculate what the canonical URL should be
    let expectedPath = relPath.replace(/index\.html$/, '');
    if (!expectedPath.startsWith('/')) expectedPath = '/' + expectedPath;
    if (!expectedPath.endsWith('/')) expectedPath = expectedPath + '/';
    if (expectedPath === '//') expectedPath = '/';
    const expectedCanonical = `https://arzhomeremodeling.com${expectedPath}`;
    
    if (canonicalHref !== expectedCanonical) {
      violations.push({
        rule: 'Canonical Tags',
        message: `Self-Referential Canonical mismatch. Expected "${expectedCanonical}" but found "${canonicalHref}"`
      });
    }
  }

  // 4. Semantic Layout Tags: <header>, <nav>, <main>, <footer>
  const semanticTags = ['header', 'nav', 'main', 'footer'];
  semanticTags.forEach(tag => {
    totalChecks++;
    const regex = new RegExp(`<${tag}\\b`, 'i');
    if (!regex.test(content)) {
      violations.push({ rule: 'Semantic Layout', message: `Missing semantic layout tag: <${tag}>` });
    }
  });

  // 5. Image Lazy Loading & Explicit Dimensions & Alt tags
  const imgRegex = /<img\b([^>]*)\/?>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    const attributes = imgMatch[1];
    
    // Check if it's an LCP or eager image
    const isEager = attributes.includes('loading="eager"') || 
                    attributes.includes('fetchPriority="high"') || 
                    attributes.includes('fetchpriority="high"') ||
                    attributes.includes('web-logo-image'); // Skip logo
                    
    const srcMatch = attributes.match(/src=["']([^"']+)["']/i);
    const srcName = srcMatch ? srcMatch[1] : 'unknown image';

    // A. Native Lazy Loading
    totalChecks++;
    if (!isEager && !attributes.includes('loading="lazy"')) {
      violations.push({
        rule: 'Native Lazy Loading',
        message: `Image missing loading="lazy" attribute: src="${srcName}"`
      });
    }

    // B. Explicit Image Dimensions
    const hasWidth = /width=["']\d+["']/i.test(attributes) || /width=\{(\d+)\}/i.test(attributes);
    const hasHeight = /height=["']\d+["']/i.test(attributes) || /height=\{(\d+)\}/i.test(attributes);
    totalChecks++;
    if (!hasWidth || !hasHeight) {
      // Allow Next.js layout='fill' patterns or style overlays in build output which use specific classes/styles
      const isFillImage = attributes.includes('object-cover') && (attributes.includes('absolute') || attributes.includes('fill'));
      if (!isFillImage && !srcName.includes('favicon') && !attributes.includes('style=')) {
        violations.push({
          rule: 'Explicit Image Dimensions',
          message: `Image missing explicit width or height attributes: src="${srcName}"`
        });
      }
    }

    // C. Alt Tags Check
    const hasAlt = /alt=["']([^"']*)["']/i.test(attributes);
    const hasEmptyAlt = /alt=["']["']/i.test(attributes);
    totalChecks++;
    if (!hasAlt || hasEmptyAlt) {
      // Ignore decorative icon SVG/PNG images
      if (!attributes.includes('icon') && !attributes.includes('badge') && !srcName.includes('icon')) {
        violations.push({
          rule: 'Image Alt Tags',
          message: `Image missing descriptive alt attribute: src="${srcName}"`
        });
      }
    }
  }

  // 6. Responsive Tables Check
  const tableRegex = /<table\b([^>]*?)>/gi;
  let tableMatch;
  while ((tableMatch = tableRegex.exec(content)) !== null) {
    totalChecks++;
    // Verify if the table is wrapped in a container that has overflow scrolling
    const tableIndex = tableMatch.index;
    const surroundingHTML = content.substring(Math.max(0, tableIndex - 300), tableIndex);
    
    // Check if the closest open div container has overflow class
    const hasOverflowContainer = surroundingHTML.includes('overflow-x-auto') || 
                                 surroundingHTML.includes('overflow-x:auto') || 
                                 surroundingHTML.includes('overflow-x: auto') ||
                                 surroundingHTML.includes('overflow-auto') ||
                                 surroundingHTML.includes('TableContainer');
                                 
    if (!hasOverflowContainer) {
      violations.push({
        rule: 'Responsive Tables',
        message: 'Table found that does not appear to be wrapped in a responsive overflow scroll container'
      });
    }
  }

  if (violations.length > 0) {
    failedFiles++;
    totalViolations += violations.length;
    console.log(`📄 Page: ${relPath}`);
    violations.forEach(v => {
      console.log(`   ⚠️  [${v.rule}] ${v.message}`);
    });
    console.log('');
  }
});

console.log('='.repeat(80));
console.log('\n📊 SEO COMPLIANCE AUDIT RESULTS:\n');
console.log(`Total Pages Inspected: ${htmlFiles.length - failedFiles} compliant / ${htmlFiles.length} total`);
console.log(`Total Checkpoints Run: ${totalChecks}`);
console.log(`Total Violations Found: ${totalViolations}`);
console.log(`Compliance Score: ${htmlFiles.length > 0 ? (((htmlFiles.length - failedFiles) / htmlFiles.length) * 100).toFixed(2) : 100}%`);
console.log('\n' + '='.repeat(80));

if (totalViolations > 0) {
  console.log('\n❌ SEO Compliance Audit FAILED. Please resolve the above issues.');
  process.exit(1);
} else {
  console.log('\n✅ SEO Compliance Audit PASSED! All pages follow rules perfectly.');
  process.exit(0);
}
