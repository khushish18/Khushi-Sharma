const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('out directory does not exist');
  process.exit(1);
}

// Ensure .nojekyll exists
fs.writeFileSync(path.join(outDir, '.nojekyll'), '# Disable Jekyll\n');

// Rename _next to next
const oldNext = path.join(outDir, '_next');
const newNext = path.join(outDir, 'next');

if (fs.existsSync(oldNext)) {
  if (fs.existsSync(newNext)) {
    fs.rmSync(newNext, { recursive: true, force: true });
  }
  fs.renameSync(oldNext, newNext);
  console.log('Renamed _next directory to next');
}

// Recursively update references in generated static files
function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.txt')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/_next/') || content.includes('_next/')) {
        content = content.replace(/\/_next\//g, '/next/').replace(/_next\//g, 'next/');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir(outDir);
console.log('Successfully updated all asset references from _next to next for GitHub Pages!');
