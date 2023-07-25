const fs = require('fs');
const path = require('path');

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (let entry of entries) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(entryPath);
    } else if (entry.isFile() && path.extname(entry.name) === '.tsx') {
      // Rename file if necessary
      if (entry.name.includes('@3x')) {
        const newEntryPath = path.join(dirPath, entry.name.replace('@3x', ''));
        fs.renameSync(entryPath, newEntryPath);
        entryPath = newEntryPath;
      }

      // Replace @3x in the content of the file
      const content = fs.readFileSync(entryPath, 'utf8');
      const newContent = content.replace(/@3x/g, '');
      if (content !== newContent) {
        fs.writeFileSync(entryPath, newContent);
      }
    }
  }
}

// Start the process from the current directory
processDirectory('.');
