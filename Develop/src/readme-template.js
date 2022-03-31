// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseType = license;
    const addLicense = '';
    if (licenseType === 'MIT') {
      addLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (licenseType === 'GPLv2') {
      addLicense = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else if (licenseType === 'Apache') {
      addLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else {
      addLicense;
    }
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const licenseLink = license;
    const addLink = ''
    if (licenseLink === 'MIT') {
      addLink = 'https://api.github.com/licenses/mit';
    } else if (licenseLink === 'GPLv2') {
      addLink = 'https://api.github.com/licenses/gpl-2.0'
    } else if (licenseLink === 'Apache') {
      addLink = 'https://api.github.com/licenses/apache-2.0';
    } else {
      addLink;
    }
  };
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(addLicense, addLink) {
    return ` 
    ${renderLicenseBadge(addLicense)}`
  }
  
  // TODO: Create a function to generate markdown for README
  
  function generateMarkdown(response) {
    const { title, description, installation, technologies, usage, contributing, test, email, username } = {...response};
    return `
    
      #${title}
  
      ##License
      
  
      ##Table of Contents
      ###1.[Licensing](#license)
      ###2.[Installation](#installation)
      ###3.[Technologies](#technologies)
      ###4.[Usage](#usage)
      ###5.[Contributing Guidelines](#contributing)
      ###6.[Testing](#test)
      ###7.[Questions](#email)
  
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
  
      ##Questions
      ###For any questions or concerns please contact me at
      Github: ${response.username}
      Email: ${response.email}
    `
  }
  