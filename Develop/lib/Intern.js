const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        //By calling the super() method in the constructor method, we call the parent's constructor method
        // and gets access to the parent's properties and methods.
        super(name, id, email);

        this.school = school;

    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;