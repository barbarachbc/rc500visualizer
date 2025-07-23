// Node.js script to copy non-JS/CSS/HTML assets from src/ to dist/
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '../src');
const ASSETS = path.join(__dirname, '../assets');
const PLUGIN = path.join(__dirname, '../plugin');
const DIST = path.join(__dirname, '../dist');

function copyRecursive(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    const stat = fs.statSync(srcFile);
    if (stat.isDirectory()) {
      copyRecursive(srcFile, destFile);
    } else if (!/\.(js|css|html)$/i.test(file)) {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

copyRecursive(SRC, DIST);
copyRecursive(ASSETS, DIST);
copyRecursive(PLUGIN, DIST);
console.log('Assets copied to dist/.');
