const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        //By calling the super() method in the constructor method, we call the parent's constructor method
        // and gets access to the parent's properties and methods.

        super(name, id, email);

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