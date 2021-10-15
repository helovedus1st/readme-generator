// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'gituser',
    },
    {
        type: 'input',
        message: 'What is the name of the Github repository for your project?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide your installation instructions:',
        name: 'install',
        default: 'Not applicable for this application.',
    },
    {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide the contribution guidelines:',
        name: 'contribute',
        default: 'Not applicable for this application.',
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'test',
        default: 'Not applicable for this application.',
    },
    {
        type: 'list',
        message: 'Choose an open source license:',
        name: 'license',
        choices: ['None', 'MIT', 'ISC']
    },
];

// TODO: Create a function to write README file
//function writeToFile('readme.md', data) {}

function writeToFile(filename, answers) {
    fs.writeFile(`./output/${filename}`, generateMarkdown(answers), (err) => 
        err ? console.error(err) : console.log("file created successfully")
    )};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
          console.log(answers);
          writeToFile("README.md", (answers))
      });
};

// Function call to initialize app
init();
