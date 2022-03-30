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
    ${readMeArr
    .map(({title, description, installation, technologies, usage, contributing, tests}) => {
      return `
      #${title}

      ##Description
      ${description}

      ##Installation
      ###Instructions for Project Installation:
      ${installation}

      ##Technologies
      ###Built With: 
      ${technologies.join(', ')}

      ##Usage
      ###Information Regarding Project Usage:
      ${usage}

      ##Contributing Guidelines
      ###Information Regarding Contributing Guidelines:
      ${contributing}

      ##Testing
      ###Information Regarding Testing for this Project:
      ${tests}
      `
    })}
    `
  
}

function generateMarkdown(readmeData) {
  const { title, description, installation, technologies, usage, contributing, tests, email, username, profile } = {... readmeData};
  return `
    ${readMeFill(description)}
  
  ##Contact
  ###For any questions or concerns please contact me at
  ${githubPrompt(email)}
  ${githubPrompt(username)}
  ${githubPrompt(profile)}
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
