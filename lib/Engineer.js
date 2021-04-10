const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, githubName, githubRepo){
        super(name, id, email);
        this.githubName = githubName;
        this.githubRepo = githubRepo;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;