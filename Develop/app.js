const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");​
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");​
const render = require("./lib/htmlRenderer");​​

const devTeam = []


// Write code to use inquirer to gather information about the development team members,     // and to create objects for each team member (using the correct classes as blueprints!)


function createDevTeam() {
    inquirer.prompt([{
                name: "teamMembers",
                type: "input",
                message: "What is your Manager's name? ",
                membersPosition: [
                    "Intern",
                    "Engineer",
                    "Manager",
                    "Not listed employees"
                ]
            }





            // After the user has input all employees desired, call the `render` function (required
            // above) and pass in an array containing all employee objects; the `render` function will
            // generate and return a block of HTML including templated divs for each employee!
        ])


        .then(userInput => {
            switch (userInput.teamInput) {

                //created cases  for userinput
                case "Intern":
                    addIntern();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Manager":
                    addManager();
                    break;

                case "Not listed employees":
                    render(devTeam);
                    break

            }
        })

    ​
    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.
    ​
    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.

    function createIntern() {
        inquirer.prompt([{
                    name: "internsName",
                    type: "input",
                    message: "What is your Intern's name? ",
                },

                {
                    name: "internsId",
                    type: "input",
                    message: "What is your Intern's id? ",
                },

                {
                    name: "internsEmail",
                    type: "input",
                    message: "What is your Intern's email address? ",
                },


                {
                    name: "internsSchool",
                    type: "input",
                    message: "What is the name of your Intern's School? ",
                }

            ])
            .then(userInput => {
                const yourIntern = new Intern(userInput.internsName, userInput.internsId, userInput.internsSchool, userInput.internsEmail)

                devTeam.push(yourIntern)

                createDevTeam();

            })

    }

    function createEngineer() {
        inquirer.prompt([{
                    name: "engineersName",
                    type: "input",
                    message: "What is your Engineer's name? ",
                },

                {
                    name: "engineersId",
                    type: "input",
                    message: "What is your Engineer's id? ",
                },

                {
                    name: "engineersEmail",
                    type: "input",
                    message: "What is your Engineer's email address? ",
                },


                {
                    name: "engineersGithub",
                    type: "input",
                    message: "What is your Engineer's Github? ",
                }

            ])
            .then(userInput => {

                const yourEngineer = new Intern(userInput.engineersName, userInput.engineersId, userInput.engineersEmail, userInput.engineersGithub)

                devTeam.push(yourManager)

                createDevTeam();

            })

    }


    function createManager() {
        inquirer.prompt([{
                    name: "managersName",
                    type: "input",
                    message: "What is your Manager's name? ",
                },

                {
                    name: "managersId",
                    type: "input",
                    message: "What is your Manager's id? ",
                },

                {
                    name: "managersEmail",
                    type: "input",
                    message: "What is your Manager's email address? ",
                },


                {
                    name: "managersOfficeNum",
                    type: "input",
                    message: "What is your Manager's Office Number? ",
                }

            ])

            .then(userInput => {
                const yourManager = new Manager(userInput.managersName, userInput.managersId, userInput.managersEmail, userInput.managersOfficeNum)

                devTeam.push(yourManager)

                createDevTeam();

            })
        // and to create objects for each team member (using the correct classes as blueprints!)
    }​
}


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```

module.exports = devTeam

createDevTeam();