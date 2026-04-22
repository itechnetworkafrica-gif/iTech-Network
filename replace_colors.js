const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('client/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace brand-orange with brand-teal
  content = content.replace(/brand-orange/g, 'brand-teal');
  
  // Replace text-orange-* with text-teal-*
  content = content.replace(/text-orange-/g, 'text-teal-');
  
  // Replace bg-orange-* with bg-teal-*
  content = content.replace(/bg-orange-/g, 'bg-teal-');
  
  // Replace border-orange-* with border-teal-*
  content = content.replace(/border-orange-/g, 'border-teal-');

  // Replace shadow-orange-* with shadow-teal-*
  content = content.replace(/shadow-orange-/g, 'shadow-teal-');

  // Replace ring-orange-* with ring-teal-*
  content = content.replace(/ring-orange-/g, 'ring-teal-');
  
  // Replace from-orange-* to from-teal-*
  content = content.replace(/from-orange-/g, 'from-teal-');
  
  // Replace via-orange-* to via-teal-*
  content = content.replace(/via-orange-/g, 'via-teal-');

  // Replace to-orange-* to to-teal-*
  content = content.replace(/to-orange-/g, 'to-teal-');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
