// Team Profile Generator

// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const arr = require("./src/QuestionArrays");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Function calls
// Function call to initialize application
init();

// Function definitions
function init() {
    promptManagerInfo(arr.managerQuestionArray);
}

// Prompt for manager information
function promptManagerInfo(questions) {
    // Prompt user with questions array
    inquirer.prompt(questions)
        .then((data) => {
            // Create manager
            const manager = new Manager(data.name, data.id, data.email, data.number);
            
            // Build team
            buildTeam(manager);
            });
}

// Display menu
function displayMenu(menu) {
    console.log("here");
    // Prompt user with options from the menuArray
    inquirer.prompt(menu)
        .then((data) => {
            console.log(data);
            });
}

function buildTeam(manager){
    let finishedBuildlingTeam = false;

    console.log(`Manager is: ${manager.getName()}`);
    
    // while not finished building team
    displayMenu(arr.menuArray);
    //while(!finishedBuildlingTeam)
        // display menu

       // finishedBuildingTeam = true;
            // if engineer
                // prompt for engineer github details
                // create new engineer
                // push new engineer onto engineer array
            // if intern
                //prompt for intern details
                // create new intern
                // push new intern onto intern array
            // if finished building team
                // set finished = true (break out of while loop)
    

    // call function to build html string with (manager, engineerArray, internArray)
}

