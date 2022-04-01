const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/readme-template');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of your project? (required)',
            validate: readmeName => {
                if (readmeName) {
                    return true;
                } else {
                    console.log('please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'please enter a description for your project (required):',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'what technologies did you use for this project? check all that apply.',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES5', 'ES6', 'jQuery', 'Node']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'please enter instructions for the installation of your project (required):',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('please enter the instructions for the installation of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'please enter usage information (required):',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('please enter the usage information.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'please enter information regarding the contributing guidelines for your project:',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('please enter information for contributing guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'please enter instructions for testing your project (required):',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    console.log('please enter the instructions for testing your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'profile',
            message: 'please provide a link to your github profile:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email address:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'choose a license to add to your project:',
            choices: ['MIT', 'GPLv2', 'Apache']
        }
    ];

// TODO: Create a function to write README file
function writeFile(response) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', response.toString(), err => {
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

  function readFile() {
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
    
inquirer.prompt(questions)
    .then(response => {
        console.log(response);
        return generateMarkdown(response);
    })
    .then(pageMd => {
        return writeFile(pageMd);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return readFile();
    })
    .catch(err => {
        console.log(err);
    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README