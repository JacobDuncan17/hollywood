
const inquirer = require("inquirer")
const fs = require("fs")
const markdown = require("./utils/generateMarkdown")

const readme = "./README.md"

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license does your project have?',
      choices: [
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" Licensev',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 1.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v3.0',
        'Mozilla Public License 2.0',
        'The Unlicense',
        'None',
      ],
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
  
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`README file has been generated at ${fileName}`);
    });
  }

// TODO: Create a function to initialize app
function init() {
    // Prompt user with questions
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(readme, markdown(data))
        });
}
init();

