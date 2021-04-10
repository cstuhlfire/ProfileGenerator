// Team Profile Generator

// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Function calls
// Function call to initialize application
init();

// Function definitions
function init() {
    promptManagerInfo();
}

// Prompt for manager information
function promptManagerInfo() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the Team Manager's name: ",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the employee ID: ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address: ",
    },
    {
      type: "input",
      name: "number",
      message: "Enter the office number: ",
    },
  ])
  .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.number);
      console.log(manager);
      console.log(manager.getName());
  });
}
