const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

function createLogFiles() {
  if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
    console.log('Logs directory created.');
  }

  process.chdir(logsDirectory);

  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logsDirectory, fileName);
    const text = `Log file ${i}.`;

    fs.writeFileSync(filePath, text);
    console.log(`File created: ${fileName}`);
  }
}

createLogFiles();
