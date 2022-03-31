const fs = require('fs');
const readmeLocation = './dist/README.md';

// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeToFile(readmeLocation, fileContent, err => {
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

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile(readmeLocation, fileContent, err => {
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

module.exports = { writeToFile, copyFile };