const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNo) {


        //By calling the super() method in the constructor method, we call the parent's constructor method
        // and gets access to the parent's properties and methods.
        super(name, id, email);

        this.officeNumber = officeNo;

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;