const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const { exit } = require('process');

let teamMembers = [];

const bossQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: 'What is the Manager\'s name?',
      },
      {
        type: "input",
        name: "id",
        message: 'What is the Manager\'s id number?',
      },
      {
        type: "input",
        name: "email",
        message: 'What is the Manager\'s email?',
      },
      {
        type: "input",
        name: "officeNumber",
        message: 'What is the Manager\'s office number? (Required)',
      },
      {
        type: "list",
        name: "addPeople",
        message: "Would you like to add another employee?",
        choices: ['Engineer', 'Intern', 'Neither'],
      },
    ])
    .then((answer) => {
      const manager = {
        name: answer.name,
        id: answer.id,
        email: answer.email,
        officeNumber: answer.officeNumber
      };
      teamMembers.push(manager);
      console.log(teamMembers);
      switch (answer.addPeople) {
        case "Engineer":
          EngineerQuestions();
          break;
        case "Intern":
          InternQuestions();
          break;
        case "Neither":
          exit();
          break;
        default:
          writeToFile("dist/index.html", addTeamMembers(employee));
          break;
      }
    });
};

const EngineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: 'What is the Engineer\'s name?',
      },
      {
        type: "input",
        name: "id",
        message: 'What is the Engineer\'s id?',
      },
      {
        type: "input",
        name: "email",
        message: 'What is the Engineer\'s email?',
      },
      {
        type: "input",
        name: "github",
        message: 'What is the Engineer\'s Github profile?',
      },
      {
        type: "list",
        name: "addPeople",
        message: "Would you like to add another employee?",
        choices: ['Engineer', 'Intern', 'Neither'],
      },
    ])
    .then((answer) => {
      const engineer = {
        name: answer.name,
        id: answer.id,
        email: answer.email,
        github: answer.github
      };
      teamMembers.push(engineer);
      console.log(teamMembers);
      switch (answer.addPeople) {
        case "Engineer":
          EngineerQuestions();
          break;
        case "Intern":
          InternQuestions();
          break;
        case "Neither":
          exit();
          break;
        default:
          writeToFile('dist/index.html', addTeamMembers(employee))
          break;
      }
    });
};

const InternQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: 'What is the Intern\'s name?',
      },
      {
        type: "input",
        name: "id",
        message: 'What is the Intern\'s Id?',
      },
      {
        type: "input",
        name: "email",
        message: 'What is the Intern\'s email?',
      },
      {
        type: "input",
        name: "school",
        message: 'What school does the Intern attend?',
      },
      {
        type: "list",
        name: "addPeople",
        message: "Would you like to add another employee?",
        choices: ['Engineer', 'Intern', 'Neither'],
      },
    ])
    .then((answer) => {
      const intern = {
        name: answer.name,
        id: answer.id,
        email: answer.email,
        school: answer.school
      };
      teamMembers.push(intern);
      console.log(teamMembers);
      switch (answer.addPeople) {
        case "Engineer":
          EngineerQuestions();
          break;
        case "Intern":
          InternQuestions();
          break;
        case "Exit":
          exit();
          break;
        default:
          writeToFile("dist/index.html", addTeamMembers(employee));
          break;
      }
    });
};

bossQuestions();

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('Success!')
  })
}
