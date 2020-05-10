// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//super should be used in this situation inorder to get the parent class constructor after typing in extends

class Engineer extends Employee {

    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;

    }


    getGithub() {
        return this.github;

    }


    getRole() {
        return "Engineer";

    }
}



module.exports = Engineer;