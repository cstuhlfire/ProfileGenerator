const Employee = require("./Employee");

// Define class Engineer
class Engineer extends Employee{
    constructor(name, id, email, githubName, githubRepo){
        super(name, id, email);
        this.githubName = githubName;
        this.githubRepo = githubRepo;
    }
    // getRole overrides parent and returns "Engineer"
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;