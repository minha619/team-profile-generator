const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderHtml = require("./src/renderHTML");

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID!");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
        },
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);

            teamArray.push(manager);
        })
};

const addEmployees = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Choose your team member's role",
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the team member?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team member's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team membeer's ID",
            validae: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the team member's ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team member`'s email",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter  the team member's github username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school.",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: "Do you like to add more team members?",
            default: true
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddMember } = employeeData
            let employee
            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }
            teamArray.push(employee);

            if (confirmAddMember) {
                return addEmployees(teamArray);
            } else {
                return teamArray;
            }
        });
}
const writeFile = data =>{
    fs.writeFile('./dist/index.html', data, err=> {
        if(err){
            console.log(err);
            return;
        }else{
            console.log("Your Team Profile html has successfully created!");
        }
    })
};

addManager()
    .then(addEmployees)
    .then(memberArray => {
        return renderHtml(memberArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
