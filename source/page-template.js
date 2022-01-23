const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function addTeamMembers(employee) {
let card = [];
for (let i = 0; i < employee.length; i++) {
    const teamMembers = employee[i];
    switch (employee.getTitle()) {
    case "Manager":
        const manager = new Manager(
            employee.name,
            employee.id,
            employee.email,
            employee.officeNumber
        );
        card.push(createManagerCard(manager));
        break;
    case "Engineer":
        const engineer = new Engineer(
            employee.name,
            employee.id,
            employee.email,
            employee.github
        );
        card.push(createEngineerCard(engineer));
        break;
    case "Intern":
        const intern = new Intern(
            employee.name,
            employee.id,
            employee.email,
            employee.school
        );
        card.push(createInternCard(intern));
        break;
    }
}
return card.join(``);
};

let createManagerCard = (Manager) => {
return `
    <div class="flex-row flex-wrap justify-content-center d-flex">
    <div class="card-container">
            <div class="manager-card-header upper-container">
                <h2 id="title">${Manager.getName()}</h2>
                <h6 id="occupation"><i class="fas fa-user-tie"></i>${Manager.getRole()}</h6>
            </div>
            <div class="manager-card-body bottom-container">
                <ul class="list-requirements">
                    <li class="items-list">ID: ${Manager.getId()}</li>
                    <li class="items-list">Email: ${Manager.getEmail()}</li>
                    <li class="items-list">Office Number: ${Manager.getOfficeNumber()}</li>
                </ul>
            </div>
    </div>
</div>
`
};

let createEngineerCard = (Engineer) => {
return `
    <div class="flex-row flex-wrap justify-content-center d-flex">
    <div class="card-container">
            <div class="engineer-card-header upper-container">
                <h2 id="title">${Engineer.getName()}</h2>
                <h6 id="occupation"><i class="fas fa-server"></i>${Engineer.getRole()}</h6>
            </div>
            <div class="engineer-card-body bottom-container">
                <ul class="list-requirements">
                    <li class="items-list">ID: ${Engineer.getId()}</li>
                    <li class="items-list">Email: ${Engineer.getEmail()}</li>
                    <li class="items-list">Github Username: ${Engineer.getGithub()}</li>
                </ul>
            </div>
    </div>
</div>
    `
};

let createInternCard = (Intern) => {
return `
    <div class="flex-row flex-wrap justify-content-center d-flex">
    <div class="card-container">
            <div class="intern-card-header upper-container">
                <h2 id="title">${Intern.getName()}</h2>
                <h6 id="occupation"><i class="fas fa-university"></i>${Intern.getRole()}</h6>
            </div>
            <div class="intern-card-body bottom-container">
                <ul class="list-requirements">
                    <li class="items-list">ID: ${Intern.getId()}</li>
                    <li class="items-list">Email: ${Intern.getEmail()}</li>
                    <li class="items-list">School: ${Intern.getSchool()}</li>
                </ul>
            </div>
    </div>
`
};

function addWorkers(employee) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/486cfe768e.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <div class="Our-staff-header">
        <h1>My Team</h1>
    </div>
    <div class="flex-row flex-wrap justify-content-center d-flex">
    ${addTeamMembers(employee)}
    </div>
    </body>
    </html>
`
};

module.export = addWorkers;
