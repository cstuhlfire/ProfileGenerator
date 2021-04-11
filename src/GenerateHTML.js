// Required libraries
const lib = require("./TemplateLibrary");

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
    let totalCards = 1 + engineers.length + interns.length;

    console.log(totalCards);
    // First time through create new row
    rowString = `${lib.rowOpen}
    `;
    rowString += addManager(manager);
    cardCount++;

    rowString += `${lib.divClose}
    `;

    return rowString;
}

function addManager(manager){
    let managerString = createCard();
    return managerString;
}

function createCard(){
    let newCard = `
${lib.cardOpen}
${lib.cardClose}
`;

    return newCard;
}

module.exports = {generateHTML};