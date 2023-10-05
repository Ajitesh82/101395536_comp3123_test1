const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

function removeLogFiles() {
  if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);

    if (files.length > 0) {
      console.log('Delete files:');
      files.forEach((file) => {
        console.log(file);
        fs.unlinkSync(path.join(logsDirectory, file));
      });
    }

    fs.rmdirSync(logsDirectory);
    console.log('Directory removed');
  } else {
    console.log('Directory does not exist');
  }
}

removeLogFiles();
