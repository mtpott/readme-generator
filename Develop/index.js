// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const titlePrompt = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of your project?'
        }
    ])
    .then(answers => console.log(answers))
    .then(projectInput);
}

const projectInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'please enter a description for your project:'
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'what technologies did you use for this project? check all that apply.',
            choices: ['JavaScript', 'HTML', 'CSS', 'Node']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'please enter instructions for the installation of your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'please enter usage information:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'please enter instructions for testing your project:'
        }
    ])
    .then(answers => console.log(answers))
    .then(githubPrompt);
}

const githubPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'please enter your github username:'
        },
        {
            type: 'input',
            name: 'profile',
            message: 'please provide a link to your github profile:'
        }
    ])
    .then(answers => console.log(answers))
}
titlePrompt();

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//README should explain what the application does and why you
//used the technologies you did. at bare minimum, it needs a
//title and a short description explaining the what, why, and
//how of the project

//may also include the challenges faced and features planned to
//be added in the future

//WHAT WAS YOUR MOTIVATION?
//WHY DID YOU BUILD THIS PROJECT?
//WHAT PROBLEM DOES IT SOLVE?
//WHAT DID YOU LEARN?
//WHAT MAKES YOUR PROJECT STAND OUT?

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