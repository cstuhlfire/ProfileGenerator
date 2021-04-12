// Required libraries
const lib = require("./TemplateLibrary");

const managerIcon = "fas fa-coffee";
const engineerIcon = "fas fa-calculator";
const internIcon = "fas fa-graduation-cap";

// Functions to Generate html
function generateHTML(manager, newEngineerArray, newInternArray){
    let rowString = addRows(manager, newEngineerArray, newInternArray);

    let htmlString = `${lib.htmlOpen}
${lib.bodyOpen}
${lib.heroOpen}${manager.teamName}${lib.heroClose}
${lib.boxOpen}
${rowString}
${lib.divClose}
${lib.bodyClose}
${lib.htmlClose}
`;

    return htmlString;
}

function addRows(manager, engineers, interns){
    let rowString = "";
    let cardCount = 0;
    let rowCounter = 0;
    let totalCards = 1 + engineers.length + interns.length;

    console.log(totalCards);
    // Add manager    
    rowString += addEmployee(rowCounter, manager, managerIcon, manager.officeNumber);
    cardCount++;
    rowCounter++;

    // If there are no employees to add, close the div
    if (cardCount === totalCards){
        rowString += `${lib.divClose}
`;
        return rowString;
    }

    // If there are engineers, add them
    if (engineers.length > 0){
        for (let i = 0; i < engineers.length; i++) {
            // Add manager    
            rowString += addEmployee(rowCounter, engineers[i], engineerIcon, engineers[i].githubName);
            cardCount++;
            rowCounter++;

            // If there are 4 in the row then close row and reset cardCount
            // If there are no more employees to add close row
            if (rowCounter === 4 || cardCount === totalCards){
                rowString += `${lib.divClose}
`;
                rowCounter = 0;
            }
        }
    }
    // If there are interns, add them
    if (interns.length > 0){
        for (let i = 0; i < interns.length; i++) {
            // Add manager    
            rowString += addEmployee(rowCounter, interns[i], internIcon, interns[i].school);
            cardCount++;
            rowCounter++;

            // If there are 4 in the row then close row and reset cardCount
            // If there are no more employees to add close row
            if (rowCounter === 4 || cardCount === totalCards){
                rowString += `${lib.divClose}
`;
                rowCounter = 0;
            }
        }
    }

    return rowString;
}

function addEmployee(count, employee, icon, special){
    let empString = "";
    let specialPrompt = "";

    // If count === 0 it's the first card in a new row so create a new row
    if (count === 0){
        empString = `${lib.rowOpen}
`;
    }

    // Test role to use specific title for role specific data
    if (employee.role === "Manager"){
        specialPrompt = `Office ID: ${special}`;
    } else if (employee.role === "Engineer"){
        specialPrompt = `Github: <a href="#">${special}</a>`;
    } else if (employee.role === "Intern"){
        specialPrompt = `School: ${special}`;
    }
    
    // Modify employee specific details
    empString += ` 
    <div class="tile is-parent is-3">
    <article class="tile is-child box">

    <div class="card">
        <header class="card-header has-background-link has-text-white-ter is-size-5">
            <span class="icon is-size-5 pl-5 pt-6 pb-6 pr-4">                   
                <i class="${icon} has-text-white-ter" aria-hidden="true"></i>
            </span>
            <p class="card-header-title has-text-white-ter ">${employee.name}</p>
        </header>
        <div class="card-content">
            <div class="content">
                <p class="subtitle">${employee.role}</p>
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="#">${employee.email}</a></p>
                <p>${specialPrompt}</p>
            </div>
        </div>
    </div>
    </article>
    </div>
`;
    return empString;
}

module.exports = {generateHTML};