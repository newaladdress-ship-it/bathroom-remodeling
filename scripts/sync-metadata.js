const fs = require('fs');
const path = require('path');

const workspaceDir = path.join(__dirname, '..');
const overridesPath = path.join(workspaceDir, 'lib/custom-metadata-overrides.json');
const blogOverridesPath = path.join(workspaceDir, 'lib/blog-metadata-overrides.json');
const locationOverridesPath = path.join(workspaceDir, 'lib/location-metadata-overrides.json');

function findMetadataObjectRange(content) {
  const startKeyword = 'export const metadata';
  const startIdx = content.indexOf(startKeyword);
  if (startIdx === -1) return null;
  
  const openBraceIdx = content.indexOf('{', startIdx);
  if (openBraceIdx === -1) return null;
  
  let braceCount = 1;
  let i = openBraceIdx + 1;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') {
      braceCount++;
    } else if (content[i] === '}') {
      braceCount--;
    }
    i++;
  }
  
  if (braceCount === 0) {
    return {
      start: openBraceIdx,
      end: i
    };
  }
  return null;
}

function updateStaticFile(relativeFilePath, title, description) {
  const fullPath = path.join(workspaceDir, relativeFilePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Static page file not found: ${fullPath}`);
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  const range = findMetadataObjectRange(content);
  if (!range) {
    // Fallback: If it's page.tsx and has no metadata block (e.g. "use client" page), check layout.tsx in the same folder
    if (relativeFilePath.endsWith('page.tsx')) {
      const layoutFilePath = relativeFilePath.replace('page.tsx', 'layout.tsx');
      const layoutFullPath = path.join(workspaceDir, layoutFilePath);
      if (fs.existsSync(layoutFullPath)) {
        console.log(`Page has "use client" or no metadata block. Falling back to layout file: ${layoutFilePath}`);
        return updateStaticFile(layoutFilePath, title, description);
      }
    }
    console.warn(`Could not find metadata block in static file: ${relativeFilePath}`);
    return false;
  }

  const originalMetaBlock = content.substring(range.start, range.end);
  
  // Perform regex replacements
  let updatedMetaBlock = originalMetaBlock.replace(
    /title\s*:\s*({[\s\S]*?}|"[^"]*"|'[^']*'|`[^`]*`)/,
    `title: "${title}"`
  );

  updatedMetaBlock = updatedMetaBlock.replace(
    /description\s*:\s*("[^"]*"|'[^']*'|`[^`]*`|siteConfig\.[a-zA-Z_0-9]*)/,
    `description: "${description}"`
  );

  if (originalMetaBlock === updatedMetaBlock) {
    return false;
  }

  const newContent = content.substring(0, range.start) + updatedMetaBlock + content.substring(range.end);
  fs.writeFileSync(fullPath, newContent, 'utf8');
  console.log(`Successfully updated static page metadata for: ${relativeFilePath}`);
  return true;
}

function sync() {
  if (!fs.existsSync(overridesPath)) {
    console.log('No custom-metadata-overrides.json found. Nothing to sync.');
    return;
  }

  const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));
  console.log(`Loaded overrides list. Syncing ${Object.keys(overrides).length} entries...`);

  const blogOverrides = {};
  const locationOverrides = {};
  let staticPagesUpdatedCount = 0;

  Object.entries(overrides).forEach(([pathname, data]) => {
    const { title, description } = data;
    if (!title || !description) return;

    if (pathname.startsWith('/blog/')) {
      if (pathname === '/blog/') {
        // Blog index page is static
        const updated = updateStaticFile('app/blog/page.tsx', title, description);
        if (updated) staticPagesUpdatedCount++;
      } else {
        // Dynamic blog post
        const slug = pathname.replace(/^\/blog\/|\/$/g, '');
        blogOverrides[slug] = { title, description };
      }
    } else if (pathname.startsWith('/chandler-az-')) {
      // Dynamic location landing page
      const slug = pathname.replace(/^\/chandler-az-|\/$/g, '');
      locationOverrides[slug] = { title, description };
    } else {
      // Static page
      let relativeFilePath;
      if (pathname === '/') {
        relativeFilePath = 'app/page.tsx';
      } else {
        const cleanPath = pathname.replace(/^\/|\/$/g, '');
        relativeFilePath = `app/${cleanPath}/page.tsx`;
      }
      
      const updated = updateStaticFile(relativeFilePath, title, description);
      if (updated) staticPagesUpdatedCount++;
    }
  });

  // Write dynamic JSON overrides
  fs.writeFileSync(blogOverridesPath, JSON.stringify(blogOverrides, null, 2), 'utf8');
  console.log(`Wrote blog overrides map to: lib/blog-metadata-overrides.json (${Object.keys(blogOverrides).length} posts)`);
  
  fs.writeFileSync(locationOverridesPath, JSON.stringify(locationOverrides, null, 2), 'utf8');
  console.log(`Wrote location overrides map to: lib/location-metadata-overrides.json (${Object.keys(locationOverrides).length} locations)`);

  console.log(`\nSync Completed:`);
  console.log(`- Static page source files updated: ${staticPagesUpdatedCount}`);
  console.log(`- Dynamic blog overrides saved: ${Object.keys(blogOverrides).length}`);
  console.log(`- Dynamic location overrides saved: ${Object.keys(locationOverrides).length}`);
}

try {
  sync();
} catch (err) {
  console.error('Error during metadata sync:', err);
  process.exit(1);
}
