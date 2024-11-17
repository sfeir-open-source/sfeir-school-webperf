const fs = require('fs');
const path = require('path');

function displayFileList(folderName) {
  const folderPath = path.join(__dirname, '../docs', 'markdown', folderName);

  fs.access(folderPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`The folder "${folderName}" does not exist.`);
      return;
    }

    fs.readdir(folderPath, (err, files) => {
      if (err) {
        console.error('Error reading the folder:', err);
        return;
      }

      if (files.length > 0) {
        const formattedFiles = files.map((f) => folderName + '/' + f);
        console.log(formattedFiles);
      } else {
        console.log('The folder is empty.');
      }
    });
  });
}

const folderName = process.argv[2];
if (!folderName) {
  console.log('Please provide a folder name as an argument.');
} else {
  displayFileList(folderName);
}
