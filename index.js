// Team Profile Generator
// Define globals
let finishedBuildlingTeam = false;

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
  inquirer.prompt(questions).then((data) => {
    // Create new manager
    const manager = new Manager(data.name, data.id, data.email, data.number);
    console.log(`Manager: ${manager.getName()}`);

    // Display menu to add team members
    displayMenu();
  });
}

// Display menu
function displayMenu() {
  console.log("-----------------\n");

  // Display menu
  inquirer.prompt(arr.menuArray).then((response) => {
    buildTeam(response);
  });
}

function buildTeam(response) {
  if (response.add === "Engineer") {
    // Prompt with engineer questions
    inquirer.prompt(arr.engineerArray).then((data) => {
      console.log(data);
      displayMenu();
    });
  } else if (response.add === "Intern") {
    // Prompt with intern questions
    inquirer.prompt(arr.internArray).then((data) => {
      console.log(data);
      displayMenu();
    });
  } else {
    // Stop prompting for team members
    console.log("Finish");
  }
}

// display menu
// if engineer
// prompt for engineer github details
// create new engineer
// push new engineer onto engineer array
// display menu
// if intern
//prompt for intern details
// create new intern
// push new intern onto intern array
// display menu
// if finished building team
// finish

// call function to build html string with (manager, engineerArray, internArray)
