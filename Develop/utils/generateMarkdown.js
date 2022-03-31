// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const fs = require('fs');

const readMeFill = readMeArr => {
  return `
    
    ${readMeFill(title)}`
    //   `
    // })}
    // `
  
}

// module.exports = readMeData => {
//   const { title, ...projectData} = readMeData;
//   return `
//   #${readMeFill(title)}`
// };

function generateMarkdown(response) {
  const { title, description, installation, technologies, usage, contributing, test, email, username } = {...response};
  return `
  
    #${title}

    ##Description
    ${response.description}

    ##Installation
    ###Instructions for Project Installation:
    ${response.installation}

    ##Technologies
    ###Built With: 
    ${response.technologies.join(', ')}

    ##Usage
    ###Information Regarding Project Usage:
    ${response.usage}

    ##Contributing Guidelines
    ###Information Regarding Contributing Guidelines:
    ${response.contributing}

    ##Testing
    ###Information Regarding Testing for this Project:
    ${response.test}

    ##Contact
    ###For any questions or concerns please contact me at
    Github: ${response.username}
    Email: ${response.email}
  `
}



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

module.exports = writeToFile; 

module.exports = generateMarkdown;
