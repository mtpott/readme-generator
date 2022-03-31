const fs = require('fs');

// TODO: Create a function to write README file
const writeToFile = readMeData => {
  return new Promise((resolve, reject) => {
      fs.writeToFile('./dist/README.md', readMeData, err => {
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

module.exports = { writeToFile };