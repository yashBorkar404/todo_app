// Simple script to ensure proper GitHub Pages deployment
const fs = require('fs');
const path = require('path');

// Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
fs.writeFileSync(path.join(__dirname, 'out', '.nojekyll'), '');

console.log('✅ Created .nojekyll file');
console.log('✅ GitHub Pages deployment preparation complete');
