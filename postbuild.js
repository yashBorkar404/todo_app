// Simple script to ensure proper GitHub Pages deployment
const fs = require('fs');
const path = require('path');

// Ensure the output directory exists
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  console.log('Creating output directory...');
  fs.mkdirSync(outDir, { recursive: true });
}

// Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// List the contents of the output directory
const files = fs.readdirSync(outDir);
console.log('Output directory contents:', files);

console.log('✅ Created .nojekyll file');
console.log('✅ GitHub Pages deployment preparation complete');
