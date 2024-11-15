import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

// Get the --step=XX or --step=XX-solution argument
const args = process.argv.slice(2);
const stepArg = args.find((arg) => arg.startsWith('--step='));

if (!stepArg) {
  console.error('❌ Please provide a --step=XX or --step=XX-solution parameter');
  process.exit(1);
}

const step = stepArg.split('=')[1];

// Extract the base step number and check if it includes "-solution"
const isSolution = step.includes('-solution');
const baseStep = isSolution ? step.replace('-solution', '') : step;

// Find all matching folders
const stepsPath = path.join(process.cwd(), 'steps');
const matchingFolders = fs.readdirSync(stepsPath).filter((folder) => {
  // Match folders with the correct step number and optional "-solution" suffix
  if (isSolution) {
    return folder.startsWith(`${baseStep}-`) && folder.endsWith('-solution');
  } else {
    return folder.startsWith(`${baseStep}-`) && !folder.endsWith('-solution');
  }
});

if (matchingFolders.length === 0) {
  console.error(`❌ No folder found for step: ${step}`);
  process.exit(1);
}

if (matchingFolders.length > 1) {
  console.error(`❌ Multiple folders match the step "${step}". Be more specific.`);
  console.error(`🛠️ Matches found: ${matchingFolders.join(', ')}`);
  process.exit(1);
}

// Use the first (and only) matching folder
const selectedFolder = matchingFolders[0];
const serverPath = path.join(stepsPath, selectedFolder, 'server', 'index.js');

// Check if the server/index.js file exists
if (!fs.existsSync(serverPath)) {
  console.error(`❌ The server/index.js file is missing in the folder: ${selectedFolder}`);
  process.exit(1);
}

// Path to the common nodemon.json file
const nodemonConfigPath = path.join('common', 'nodemon.json');

// Check if the nodemon.json file exists
if (!fs.existsSync(nodemonConfigPath)) {
  console.error(`❌ Common nodemon.json file is missing at: ${nodemonConfigPath}`);
  process.exit(1);
}

// Execute the command to start the Fastify server with nodemon
console.log(`🚀 Starting project for step: ${step}`);
console.log(`📂 Selected folder: ${selectedFolder}`);
console.log(`📄 Using nodemon configuration from: ${nodemonConfigPath}`);
console.log(`📂 Server file path: ${serverPath}`);

const nodemonCommand = `nodemon --config ${nodemonConfigPath} ${serverPath}`;

exec(nodemonCommand, { cwd: path.join(stepsPath, selectedFolder) }, (err, stdout, stderr) => {
  if (err) {
    console.error(`❌ Error starting step ${step}:`, err.message);
    process.exit(1);
  }
  console.log(stdout);
  console.error(stderr);
});
