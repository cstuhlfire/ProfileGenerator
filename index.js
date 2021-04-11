// Team Profile Generator
// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const arr = require("./src/QuestionArrays");
const gen = require("./src/GenerateHTML");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Function call to start application and prompt user for manager information
promptManagerInfo();

// Prompt for manager information
function promptManagerInfo() {
  // Prompt user with questions array
  inquirer.prompt(arr.managerQuestionArray).then((data) => {
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

// Build team by prompting for new engineers and interns.
// Write to html file as each new instance is created.
function buildTeam(response) {
  if (response.add === "Engineer") {
    // Prompt with engineer questions
    inquirer.prompt(arr.engineerArray).then((data) => {
      const engineer = new Engineer(data.name, data.id, data.email, data.githubName);
      displayMenu();
    });
  } else if (response.add === "Intern") {
    // Prompt with intern questions
    inquirer.prompt(arr.internArray).then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      displayMenu();
    });
  } else {
    // Stop prompting for team members and write index.html file
    let fileString = gen.generateHTML();
    writeToFile(fileString);
  }
}

// Write file
function writeToFile(fileString) {
  const fileName = "./dist/index.html";

  fs.writeFile(fileName, fileString, (err) =>
    err ? console.log(err) : console.log("Generating index.html ...")
  );
}

// display menu
// if engineer
  // prompt for engineer github details
  // create new engineer
  // push new engineer onto engineer array
  // display menu
// if intern
  // prompt for intern details
  // create new intern
  // push new intern onto intern array
  // display menu
// if finished building team
  // finish

// call function to build html string with (manager, engineerArray, internArray)
