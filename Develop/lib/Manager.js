// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//super is used in this situation inorder to get the parent class constructor after typing in extends
class Manager extends Employee {
    constructor(name, email, id, officeNum) {

        super(name, email, id);
        this.officeNumber = officeNum;

    }

    getOfficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager";

    }
}


module.exports = Manager;