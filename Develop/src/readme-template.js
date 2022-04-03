// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseType = license;
    let addLicense = '';
    if (licenseType === 'MIT') {
      addLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (licenseType === 'GPLv2') {
      addLicense = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else if (licenseType === 'Apache') {
      addLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (licenseType === 'None') {
      addLicense;
    }
    return addLicense;
  };
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let licenseLink = license;
    let addLink = '';
    if (licenseLink === 'MIT') {
      addLink = 'https://api.github.com/licenses/mit';
    } else if (licenseLink === 'GPLv2') {
      addLink = 'https://api.github.com/licenses/gpl-2.0'
    } else if (licenseLink === 'Apache') {
      addLink = 'https://api.github.com/licenses/apache-2.0';
    } else if (licenseLink === 'None') {
      addLink;
    }
    return addLink;
  };
  
  // TODO: Create a function to generate markdown for README
  module.exports = response => {
    const { title, description, installation, technologies, usage, contributing, test, email, username, license } = {...response};
    return `
# ${title}

${renderLicenseBadge(response.license)}

## Table of Contents
### -[Installation](#installation)
### -[Technologies](#technologies)
### -[Usage](#usage)
### -[Contributing Guidelines](#contributing)
### -[Testing](#test)
### -[Questions](#questions)
### -[Licensing](#license)

## Description
${response.description}
  
## Installation
### Instructions for Project Installation:
${response.installation}
  
## Technologies
### Built With:
${response.technologies.join(', ')}

## Usage
### Information Regarding Project Usage:
${response.usage}

## Contributing
### Information Regarding Contributing Guidelines:
${response.contributing}
  
## Test
### Information Regarding Testing for this Project:
${response.test}
  
## Questions
### Please reach out with any questions or concerns!
Github: https://github.com/${response.username}

Email: ${response.email}

## License
This project is licensed under ${response.license}

${renderLicenseLink(response.license)}`
}