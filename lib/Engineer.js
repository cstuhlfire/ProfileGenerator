const Employee = require("./Employee");

// Define class Engineer
class Engineer extends Employee{
    constructor(name, id, email, githubName, githubRepo){
        super(name, id, email);
        this.githubName = githubName;
    }

    // getGithub returns repo
    getGithub(){
        return this.githubName;
    }

    // getRole overrides parent and returns "Engineer"
    getRole(){
        this.role = "Engineer";
        return this.role;
    }
}

module.exports = Engineer;