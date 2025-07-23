// build/minify-html.js
const fs = require('fs');
const path = require('path');

const srcHtml = path.join(__dirname, '../src/rc500_visualizer.html');
const distHtml = path.join(__dirname, '../dist/rc500_visualizer.html');

let html = fs.readFileSync(srcHtml, 'utf8');

// Only replace main.js and main.css references with minified versions
html = html.replace(/<script[^>]+src=["']main\.js["']([^>]*)><\/script>/g, '<script src="rc500_visualizer.bundle.min.js" $1></script>');
html = html.replace(/<link[^>]+href=["']main\.css["'][^>]*>/g, '<link rel="stylesheet" href="rc500_visualizer.min.css">');

// Simple minification: remove comments and extra whitespace
html = html.replace(/<!--.*?-->/gs, '')
           .replace(/\n\s*/g, '')
           .replace(/\s{2,}/g, ' ')
           .trim();

fs.writeFileSync(distHtml, html);
console.log('Minified HTML written to dist/rc500_visualizer.html');
