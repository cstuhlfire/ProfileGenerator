// Create managerQuestionArray
managerQuestionArray = [
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
];

// Create menuArray
menuArray = [
  {
    type: "list",
    name: "menuChoice",
    message: "Would you like to add an: ",
    choices: ["Engineer", "Intern", "Finish"],
  },
];

module.exports = {managerQuestionArray,
                menuArray};
