const fs = require('fs');
const path = require('path');

const iosFont = "'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const iosMono = "'ui-monospace', 'SFMono-Regular', Menlo, Monaco, Consolas, monospace";

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace inline JSX styles and CSS files
  content = content.replace(/['"]Inter['"],\s*sans-serif/g, iosFont);
  content = content.replace(/['"]Playfair Display['"],\s*serif/g, iosFont);
  content = content.replace(/['"]Outfit['"],\s*sans-serif/g, iosFont);
  content = content.replace(/['"]monospace['"]/g, iosMono);
  
  // Special case for index.css where it's declared globally without quotes
  content = content.replace(/font-family:\s*['"]Inter['"],\s*-apple-system,\s*BlinkMacSystemFont,\s*['"]Segoe UI['"],\s*Roboto,\s*Helvetica,\s*Arial,\s*sans-serif;/g, `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath);
    } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.css')) {
      processFile(dirPath);
    }
  });
}

walkDir('./src');
console.log('Font replacement complete.');
