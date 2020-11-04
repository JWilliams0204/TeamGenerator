// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {

    constructor(nameParam, idParam, emailParam, school) {

        super(nameParam, idParam, emailParam);
        this.school = school;

    }

    getRole() {

        return "Intern";
    }

    getSchool() {

        return this.school
    }
}

module.exports = Intern;