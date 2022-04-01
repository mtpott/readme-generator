const fs = require('fs');


const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./dist/README.md', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'README created.'
      });
    });
  });
};

module.exports = readFile;