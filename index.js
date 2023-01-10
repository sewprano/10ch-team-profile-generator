// imports
const inquirer = require( 'inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');


//subclasses
const Manager = require( './lib/Manager');
const Engineer = require( './lib/Engineer');
const Intern = require( './lib/Intern');

//prompt questions
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team Manager\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Manager\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Manager\'s email address?'
    },{
        type: 'input',
        name: 'office',
        message: 'Waht is the Manager\'s office number?'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email address?'
    },{
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github name?'
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the Team intern\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email address?'
    },{
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school name?'
    },
]

//array for team list
const teamList = [];

//function declaration for saving html
const writeToFile = (HTMLstring) => {
    fs.writeFile(`dist/index.html`, HTMLstring, error => error ? console.error(error) : console.log('File created'));
}

//prompt user for team manager info
const promptForManagerInfo = async () => {
    try {
        const answers = await inquirer.prompt(managerQuestions);
        const {name, id, email, office} = answers;
        teamList.push(new Manager(name, id, email, office));

        //call function to prompt for the next team member
        promptForTeamMember();
    }
    catch (error) {
        console.error(error);
    }
}

//prompt user for engineer info
const promptForEngineerInfo = async () => {
    try {
        const answers = await inquirer.prompt(engineerQuestions);
        const {name, id, email, github} = answers;
        teamList.push(new Engineer(name, id, email, github));

        //call function to prompt for the next team member
        promptForTeamMember();
    }
    catch (error) {
        console.error(error);
    }
}

//prompt user for intern info
const promptForInternInfo = async () => {
    try {
        const answers = await inquirer.prompt(internQuestions);
        const {name, id, email, school} = answers;
        teamList.push(new Intern(name, id, email, school));

        //call function to prompt for the next team member
        promptForTeamMember();
    }
    catch (error) {
        console.error(error);
    }
}

//prompt user for new team member
const promptForTeamMember = async () => { 
    try {
        const answers = await inquirer.prompt( {
            type: 'list',
            name: 'employeeType',
            message: 'What kind of employee whould you like to add?',
            choices: ['Engineer', 'Intern', 'None, team finished'],
        });

        //call for info on employee type or finish and generate html
        if (answers.employeeType === 'Engineer') {
            promptForEngineerInfo();
        } else if (answers.employeeType === 'Intern') {
            promptForInternInfo();
        } else {
            writeToFile(generateHTML(teamList));
        }

    } catch (error) {
        console.error(error);
    }

}

//call manager function
promptForManagerInfo();


