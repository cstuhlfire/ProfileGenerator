const Employee = require("./Employee");

// Define class Manager
class Manager extends Employee{
    constructor(name, id, email, officeNumber, teamName){
        super(name, id, email);
        this.officeNumber = officeNumber
        this.teamName = teamName;
    }

    // getRole overrides parent and returns "Manager"
    getRole(){
        this.role = "Manager";
        return this.role;
    }

}

module.exports = Manager;