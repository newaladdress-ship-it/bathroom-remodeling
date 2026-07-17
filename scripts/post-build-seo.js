const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../out');

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

const CRITICAL_CSS = `
/* CRITICAL INLINED CSS TO PREVENT FOUC AND ACCELERATE FCP/LCP */
:root {
  --background: #FFFFFF;
  --foreground: #222222;
  --primary: #1A2E4A;
  --accent: #C9972B;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 112px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
  margin: 0;
}
* {
  box-sizing: border-box;
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: var(--foreground);
  color: var(--background);
  height: 40px;
  display: flex;
  align-items: center;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let cleanedContent = content;

  const relPath = path.relative(outDir, filePath).replace(/\\/g, '/');

  // Skip admin pages from standard search compliance rules
  const isAdmin = relPath.startsWith('admin') || relPath.includes('admin/');

  // 1. Automated Canonical Tag Insertion (Except for 404.html)
  if (relPath !== '404.html' && !isAdmin) {
    let urlPath = relPath.replace(/index\.html$/, '');
    if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
    if (!urlPath.endsWith('/')) urlPath = urlPath + '/';
    if (urlPath === '//') urlPath = '/';
    const canonicalUrl = `https://arzhomeremodeling.com${urlPath}`;

    const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["'](.*?)["'][^>]*\/?>/i;
    if (canonicalRegex.test(cleanedContent)) {
      cleanedContent = cleanedContent.replace(canonicalRegex, `<link rel="canonical" href="${canonicalUrl}">`);
    } else {
      const headEndIdx = cleanedContent.indexOf('</head>');
      if (headEndIdx !== -1) {
        cleanedContent = cleanedContent.substring(0, headEndIdx) + 
                         `\n<link rel="canonical" href="${canonicalUrl}">\n` + 
                         cleanedContent.substring(headEndIdx);
      }
    }
  }

  // Preload LCP hero images (fetchpriority="high")
  const imgRegex = /<img\s+[^>]*fetch[pP]riority=["']high["'][^>]*>/gi;
  const lcpMatches = cleanedContent.match(imgRegex);
  if (lcpMatches) {
    lcpMatches.forEach(tag => {
      const srcMatch = tag.match(/src=["']([^"']+)["']/i);
      if (srcMatch) {
        const src = srcMatch[1];
        if (!cleanedContent.includes(`href="${src}"`) || !cleanedContent.includes('rel="preload"')) {
          console.log(`Injecting image preload for LCP resource: ${src} in ${relPath}`);
          const headEndIdx = cleanedContent.indexOf('</head>');
          if (headEndIdx !== -1) {
            let preloadTag = `<link rel="preload" as="image" href="${src}" fetchpriority="high">`;
            if (src === '/images/hero/luxury-shower-remodel-chandler.avif') {
              let base64MobileHero = "";
              try {
                const mobileHeroPath = path.join(__dirname, '../public/images/hero/luxury-shower-remodel-chandler-640.avif');
                if (fs.existsSync(mobileHeroPath)) {
                  base64MobileHero = `data:image/avif;base64,${fs.readFileSync(mobileHeroPath).toString('base64')}`;
                }
              } catch (e) {
                console.error("Failed to read image in post-build-seo:", e.message);
              }
              const mobileSrc = base64MobileHero || "/images/hero/luxury-shower-remodel-chandler-640.avif";
              preloadTag = `<link rel="preload" as="image" href="${src}" imagesrcset="${mobileSrc} 640w, /images/hero/luxury-shower-remodel-chandler-828.avif 828w, /images/hero/luxury-shower-remodel-chandler.avif 1200w" imagesizes="100vw" fetchpriority="high">`;
            }
            cleanedContent = 
              cleanedContent.substring(0, headEndIdx) + 
              `\n${preloadTag}\n` + 
              cleanedContent.substring(headEndIdx);
          }
        }
      }
    });
  }

  // 2. Native Lazy Loading & Explicit Dimensions injection
  const imgTagRegex = /<img\b([^>]*?)>/gi;
  const imgMatches = [];
  let imgMatch;
  while ((imgMatch = imgTagRegex.exec(cleanedContent)) !== null) {
    imgMatches.push({ fullTag: imgMatch[0], attrs: imgMatch[1] });
  }

  for (const item of imgMatches) {
    const { fullTag, attrs } = item;
    let newAttrs = attrs;

    // Check if it's LCP or eager
    const isEager = attrs.includes('loading="eager"') || 
                    attrs.includes('fetchPriority="high"') || 
                    attrs.includes('fetchpriority="high"') ||
                    attrs.includes('web-logo-image');

    // A. Native Lazy Loading
    if (!isEager && !attrs.includes('loading="lazy"')) {
      newAttrs += ' loading="lazy"';
    }

    // B. Dimensions injection using Sharp
    const hasWidth = /width=["']\d+["']/i.test(attrs) || /width=\{(\d+)\}/i.test(attrs);
    const hasHeight = /height=["']\d+["']/i.test(attrs) || /height=\{(\d+)\}/i.test(attrs);

    if ((!hasWidth || !hasHeight) && !attrs.includes('object-cover') && !attrs.includes('favicon')) {
      const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
      if (srcMatch) {
        const src = srcMatch[1];
        if (src.startsWith('/') && !src.startsWith('//')) {
          const localImgPath = path.join(__dirname, '../public', src.split('?')[0]);
          if (fs.existsSync(localImgPath)) {
            try {
              const metadata = await sharp(localImgPath).metadata();
              if (metadata.width && metadata.height) {
                if (!hasWidth) newAttrs += ` width="${metadata.width}"`;
                if (!hasHeight) newAttrs += ` height="${metadata.height}"`;
              }
            } catch (err) {
              console.warn(`[Warning] Could not fetch dimensions for local image ${localImgPath}: ${err.message}`);
            }
          }
        }
      }
    }

    // Replace the tag
    cleanedContent = cleanedContent.replace(fullTag, `<img${newAttrs}>`);
  }

  // 3. Find and hoist all JSON-LD scripts if any exist
  const schemaRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  const schemas = [];
  let smatch;
  
  while ((smatch = schemaRegex.exec(content)) !== null) {
    schemas.push(smatch[0]);
  }
  
  if (schemas.length > 0) {
    cleanedContent = cleanedContent.replace(schemaRegex, '');
  }
  
  cleanedContent = cleanedContent.replace(/<head\s*>\s*<\/head\s*>/gi, '');
  cleanedContent = cleanedContent.replace(/<head\s*\/>/gi, '');

  // 4. Optimize HTML Title (Enforce under 60 characters)
  let finalTitle = "";
  let finalDesc = "";

  const titleRegex = /<title>([\s\S]*?)<\/title>/gi;
  cleanedContent = cleanedContent.replace(titleRegex, (match, titleText) => {
    let text = titleText.trim();
    if (text.includes(' - ARZ - ARZ Home Remodeling')) {
      text = text.replace(' - ARZ - ARZ Home Remodeling', ' - ARZ');
    } else if (text.includes(' - ARZ Home Remodeling')) {
      text = text.replace(' - ARZ Home Remodeling', ' - ARZ');
    } else if (text.includes(' | ARZ Home Remodeling')) {
      text = text.replace(' | ARZ Home Remodeling', ' - ARZ');
    }
    
    text = text.replace(/Upgrades &amp; Upgrades/gi, 'Upgrades');
    text = text.replace(/Walk-in Showers &amp; Walk-In Showers/gi, 'Walk-In Showers');
    text = text.replace(/Bathroom Remodeling Timeline Chandler AZ\s+-/gi, 'Bathroom Remodel Timeline Chandler -');
    
    let plainText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    if (plainText.length >= 60) {
      text = text.replace(/\s*-\s*Professional Services?/gi, '');
      text = text.replace(/\s*-\s*Professional Installation/gi, '');
      text = text.replace(/\s*-\s*Modern Upgrades/gi, '');
      text = text.replace(/\s*-\s*Custom Builders?/gi, '');
      text = text.replace(/\s*-\s*Quality Craftsmanship/gi, '');
      text = text.replace(/\s*-\s*ARZ/g, '');
      plainText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    }
    
    if (plainText.length >= 60) {
      let temp = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      temp = temp.substring(0, 56) + '...';
      text = temp.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    finalTitle = text;
    return `<title>${text}</title>`;
  });

  // 5. Optimize Meta Description (Enforce between 120 and 158 characters)
  const descRegex = /(<meta\s+name=["']description["']\s+content=["'])([\s\S]*?)(["'])/gi;
  cleanedContent = cleanedContent.replace(descRegex, (match, prefix, descText, suffix) => {
    let text = descText.trim();
    if (text.length < 120) {
      const padding = " Licensed, bonded, and insured bathroom remodelers. Call for a free estimate today!";
      text = (text + padding).substring(0, 155);
    }
    if (text.length > 158) {
      const sub = text.substring(0, 155);
      const lastSpace = sub.lastIndexOf(' ');
      if (lastSpace > 120) {
        text = sub.substring(0, lastSpace) + '...';
      } else {
        text = sub + '...';
      }
    }
    if (text.length < 120) {
      text = descText.trim().substring(0, 155) + '...';
    }
    finalDesc = text;
    return `${prefix}${text}${suffix}`;
  });

  // Sync OG & Twitter tags
  if (finalTitle) {
    const ogTitleRegex = /(<meta\s+(?:property|name)=["']og:title["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(ogTitleRegex, (match, prefix, content, suffix) => `${prefix}${finalTitle}${suffix}`);
    const twitterTitleRegex = /(<meta\s+(?:property|name)=["']twitter:title["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(twitterTitleRegex, (match, prefix, content, suffix) => `${prefix}${finalTitle}${suffix}`);
  }

  if (finalDesc) {
    const ogDescRegex = /(<meta\s+(?:property|name)=["']og:description["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(ogDescRegex, (match, prefix, content, suffix) => `${prefix}${finalDesc}${suffix}`);
    const twitterDescRegex = /(<meta\s+(?:property|name)=["']twitter:description["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(twitterDescRegex, (match, prefix, content, suffix) => `${prefix}${finalDesc}${suffix}`);
  }
  
  // 6. Inject hoisted schemas
  if (schemas.length > 0) {
    const headEndIdx = cleanedContent.indexOf('</head>');
    if (headEndIdx !== -1) {
      const uniqueSchemas = Array.from(new Set(schemas));
      const schemaBlock = '\n' + uniqueSchemas.join('\n') + '\n';
      cleanedContent = 
        cleanedContent.substring(0, headEndIdx) + 
        schemaBlock + 
        cleanedContent.substring(headEndIdx);
    }
  }

  // 7. HTML Minification: strip comments safely
  cleanedContent = cleanedContent.replace(/<!--[\s\S]*?-->/g, (comment) => {
    if (comment.includes('[if') || comment.includes('Google Tag Manager')) return comment;
    return '';
  });

  fs.writeFileSync(filePath, cleanedContent, 'utf8');
}

function generateSitemap(htmlFiles) {
  console.log('--- Generating Sitemap.xml ---');
  const urls = [];
  htmlFiles.forEach(file => {
    const relPath = path.relative(outDir, file).replace(/\\/g, '/');
    if (relPath.startsWith('admin') || relPath.includes('admin/') || relPath.includes('404')) {
      return;
    }
    
    // Read file content to check for noindex and redirects
    const content = fs.readFileSync(file, 'utf8');
    const isNoIndex = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i.test(content);
    const isRedirect = content.includes('This page has moved.') || content.includes('window.location.replace');
    if (isNoIndex || isRedirect) {
      return;
    }
    
    let urlPath = relPath.replace(/index\.html$/, '');
    if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
    if (!urlPath.endsWith('/')) urlPath = urlPath + '/';
    if (urlPath === '//') urlPath = '/';
    
    const absoluteUrl = `https://arzhomeremodeling.com${urlPath}`;
    const stats = fs.statSync(file);
    const lastmod = stats.mtime.toISOString().split('T')[0];
    
    let priority = '0.70';
    if (urlPath === '/') priority = '1.00';
    else if (urlPath.includes('/bathroom-remodeling-chandler-az/')) priority = '0.90';
    else if (urlPath.includes('/bathroom-remodeling-gilbert-az/')) priority = '0.90';
    else if (urlPath.includes('/bathroom-remodeling-mesa-az/')) priority = '0.90';
    else if (urlPath.includes('/bathroom-remodeling-tempe-az/')) priority = '0.90';
    else if (urlPath.includes('/blog/')) priority = '0.80';
    
    urls.push(`  <url>
    <loc>${absoluteUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${urlPath === '/' || urlPath.includes('/blog') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`);
  });
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
  
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
}

function generateRobotsTxt() {
  console.log('--- Generating robots.txt ---');
  const robotsText = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /cgi-bin/
Disallow: /wp-admin/
Disallow: /*?
Disallow: /*.json$

Sitemap: https://arzhomeremodeling.com/sitemap.xml
Host: https://arzhomeremodeling.com`;

  fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsText, 'utf8');
  console.log('Generated robots.txt successfully.');
}

(async () => {
  console.log('--- Running Post-Build SEO Schema Hoisting & Enhancements ---');
  const htmlFiles = getHtmlFiles(outDir);
  console.log(`Found ${htmlFiles.length} HTML files to process.`);

  for (const file of htmlFiles) {
    try {
      await processFile(file);
    } catch (err) {
      console.error(`Error processing file ${file}:`, err);
    }
  }
  
  generateSitemap(htmlFiles);
  generateRobotsTxt();
  
  console.log('--- Post-Build SEO Schema Hoisting & Enhancements Completed ---');
})();
