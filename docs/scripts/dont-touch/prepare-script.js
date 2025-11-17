const shelljs = require('shelljs');
const path = require('path');

// Clean up web_modules
shelljs.rm('-rf', './web_modules');
shelljs.mkdir('-p', './web_modules/sfeir-school-theme');

// Try to find sfeir-school-theme in node_modules
// First try: root node_modules (monorepo)
const rootNodeModules = path.join('..', 'node_modules', 'sfeir-school-theme');
// Second try: local node_modules (docs package)
const localNodeModules = path.join('node_modules', 'sfeir-school-theme');

let sourcePath = null;

if (shelljs.test('-d', rootNodeModules)) {
  sourcePath = rootNodeModules;
  console.log('Using sfeir-school-theme from root node_modules');
} else if (shelljs.test('-d', localNodeModules)) {
  sourcePath = localNodeModules;
  console.log('Using sfeir-school-theme from local node_modules');
} else {
  console.error('Error: sfeir-school-theme not found in node_modules');
  shelljs.exit(1);
}

// Copy the theme
shelljs.cp('-rf', path.join(sourcePath, '*'), './web_modules/sfeir-school-theme');
console.log('Successfully copied sfeir-school-theme to web_modules');
