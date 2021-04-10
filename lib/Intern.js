const Employee = require("./Employee");

// Define class Intern
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    // getSchool returns school
    getSchool(){
        return this.school;
    }

    // getRole overrides parent and returns "Intern"
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;