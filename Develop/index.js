//required consts so everything works!
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/readme-template');

//array of questions, invoked when prompted through the command line
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
            name: 'username',
            message: 'please provide your github username:'
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
            choices: ['MIT', 'GPLv2', 'Apache', 'None']
        }
    ];

//functions to write and read the README.md file
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
    
//invokes inquirer.prompt and continues the Promise chain
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