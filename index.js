const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const bossQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the Manager's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the Manager's id number?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Manager's email?`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the Manager's office number?`
        },
        {
            type: 'list',
            name: 'addPeople',
            message: [`Engineer, Intern, Neither`],
        }
    ])
    .then((answer) => {

        const Manager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber);
        bossQuestions.push(bossQuestions.addPeople) {
            case 'Engineer':
                EngineerQuestions;
                break;
            case 'Intern':
                InternQuestions();
                break;
            default:

        }
    });
};

const EngineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the Engineer's name?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the Engineer's id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Engineer's email?`
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the Engineer's Github profile?`
        },
        {
            type: 'list',
            name: 'addPeople',
            message: [`Engineer, Intern, Neither`],
        }
        ])
    .then((answer) => {
        const Engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
        EngineerQuestions.push(EngineerQuestions.addPeople) {
            case 'Engineer':
                EngineerQuestions();
                break;
            case 'Intern':
                InternQuestions();
                break;
            default:
        }
    })
}; 

const InternQuestions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: `What is the Intern's name?`
        },
        {
            type: 'input', 
            name: 'id',
            message: `What is the Intern's Id?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the Intern's email?`
        },
        {
            type: 'input',
            name: 'school',
            message: `What school does the Intern attend?`
        },
        {
            type: 'list',
            name: 'addPeople',
            message: [`Engineer, Intern, Neither`],
        }
    ])
    .then((answer) => {
        const Intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        InternQuestions.push(InternQuestions.addPeople){
            case 'Engineer':
                EngineerQuestions();
                break;
            case 'Intern':
                InternQuestions();
                break;
            default:
        }
    })
};

