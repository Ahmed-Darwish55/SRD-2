const glob = require('glob');
const fs = require('fs');

const filesToReplace = glob.sync('src/**/*.json');

filesToReplace.forEach((originalFile) => {
  const prodFile = originalFile.replace('.json', '.prod.json');
  if (fs.existsSync(prodFile)) {
    const fileToRename = originalFile.replace('.json', '.acc.json');
    fs.renameSync(originalFile, fileToRename);
    console.log(`Replaced ${originalFile} with ${fileToRename}`);
  } else {
    console.warn(`No corresponding prod file found for ${originalFile}`);
  }
});
