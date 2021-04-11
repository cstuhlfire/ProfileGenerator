// Define parent class Employee
class Employee {
    // Define constructor attributes
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Define getName() method to return current employee name
    getName(){
        return this.name;
    }
    
    // Define getId() method
    getId(){
        return this.id;
    }

    // Define getEmail() method
    getEmail(){
        return this.email;
    }

    // Define getRole() method
    getRole(){
        this.role = "Employee";
        return this.role;
    }

}

module.exports = Employee;
