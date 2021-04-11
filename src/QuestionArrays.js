// Create question arrays
// Create manager question array
managerQuestionArray = [
  {
    type: "input",
    name: "name",
    message: "Enter the manager's name: ",
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
    name: "add",
    message: "Would you like to add an: ",
    choices: ["Engineer", "Intern", "Finish"],
  },
];

// Create engineerArray
engineerArray = [
    {
      type: "input",
      name: "name",
      message: "Enter the engineer's name: ",
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
      name: "githubName",
      message: "Enter the github name: ",
    },
  ];

// Create internArray
internArray = [
    {
      type: "input",
      name: "name",
      message: "Enter the intern's name: ",
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
      name: "school",
      message: "Enter the intern's school: ",
    },
  ];

module.exports = {managerQuestionArray,
                menuArray, 
                engineerArray,
                internArray};
