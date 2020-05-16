// ----------- Node Packages -----------//
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const render = require("./lib/htmlRenderer");


// ------------- START FUNCTION ---------//

async function start() {
    console.log("testing functionality");

    // Set Variable to hold HTML
    let teamHTML = "";

    // Variable to hold number of team members
    let teamSize;

    // First Question to ask to set up loop
    await inquirer.prompt({
            type: "number",
            message: "Please type in the total number of people on your team?",
            name: "totalNumber"
        })
        .then((data) => {

            // Number of team members placed in teamSize for scope purposes.
            // 1 is added start from 1 rather than 0 for user understanding.
            teamSize = data.totalNumber + 1;
        });

    // If Team Size is 0, will end program
    if (teamSize === 0) {
        console.log("Double check and try again");
        return;
    }

    // Loop begins to ask questions depending on the size of the team
    for (i = 1; i < teamSize; i++) {

        // Global variables set
        let name;
        let id;
        let title;
        let email;

        // Prompts user to answer the basic questions of the employee
        await inquirer.prompt([{
                    type: "input",
                    message: `What is the employee (${i})'s name?`,
                    name: "name"
                },

                {
                    type: "input",
                    message: `What is the employee (${i})'s id?`,
                    name: "id"
                },

                {
                    type: "input",
                    message: `What is the employee (${i})'s Email?`,
                    name: "email"
                },
                {
                    type: "list",
                    message: `What is the employee (${i})'s title?`,
                    name: "title",
                    choices: ["Engineer", "Intern", "Manager", "other employee"]
                }
            ])
            .then((data) => {

                // Takes data from user and places value in global variables
                name = data.name;
                id = data.id;
                title = data.title;
                email = data.email;
            });

        // Switch Case depending on the title of the employee
        switch (title) {
            case "Manager":

                // ask user of Manager's Office Number
                await inquirer.prompt([{
                        type: "input",
                        message: "What is your Manager's Office Number?",
                        name: "officeNo"
                    }])
                    .then((data) => {

                        // Create a new object with all avaliable user input data
                        const manager = new Manager(name, id, email, data.officeNo);

                        // Reads and places HTML from manager.html in teamMember Variable
                        teamMember = fs.readFileSync("templates/manager.html");

                        // Uses eval() to pass template literals from html files.
                        // Adds the string to the team HTML.
                        teamHTML = teamHTML + "\n" + eval('`' + teamMember + '`');
                    });
                break;

                //Steps Similar to Manager but for intern
            case "Intern":
                await inquirer.prompt([{
                        type: "input",
                        message: "What school does your Intern attend?",
                        name: "school"
                    }])
                    .then((data) => {
                        const intern = new Intern(name, id, email, data.school);
                        teamMember = fs.readFileSync("templates/intern.html");
                        teamHTML = teamHTML + "\n" + eval('`' + teamMember + '`');
                    });
                break;

                //Steps Similar to Manager but for engineer
            case "Engineer":
                await inquirer.prompt([{
                        type: "input",
                        message: "What is your Engineer's GitHub Username?",
                        name: "github"
                    }])
                    .then((data) => {
                        const engineer = new Engineer(name, id, email, data.github);
                        teamMember = fs.readFileSync("templates/engineer.html");
                        teamHTML = teamHTML + "\n" + eval('`' + teamMember + '`');
                    });
                break;

        }

    }

    // Reads main.html and places html in a variable
    const mainHTML = fs.readFileSync("templates/main.html");

    // Use eval to implement template literals in main.html and places teamHTML inside main template
    teamHTML = eval('`' + mainHTML + '`');

    // write file to new team.html file
    fs.writeFile("output/team.html", teamHTML, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

    // console.log(teamHTML);
}


start();