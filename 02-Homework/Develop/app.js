const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = []

    function mainMenu() {
     inquirer.prompt([
         {
             type: "list",
             name: "choice",
             message:"What would you like to do?",
             choices: ["Add Manager", "Add Intern", "Add Engineer", "Done"],
         },
         
     ]) .then(function(response){
         if (response.choice === "Add Manager") {
               memberManager()

         }
         if (response.choice === "Add Intern") {
            memberIntern()
         }
         if (response.choice === "Add Engineer") {
            memberEngineer()
         }
         if (response.choice === "Done") {
            makeTeam()
         }
     })  
    }
    mainMenu();
    
    function memberManager() {

  return inquirer.prompt([ 
    { 
      type: "input",
      name: "name",
      message: "Please enter full name for Manager",
      required: true,  
    },
    {
        type: "input",
        name:"Id",
        message: "What is your Id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email",
    },
    {
        type: "input",
        name: "officeNumber",
        message: " what is your office Number?"
    },

  


]).then(function(answers){
   const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
  team.push(manager)
  mainMenu()
})


    };

    function memberIntern() {
     return inquirer.prompt([
         {
           type: "input",
           name: "name",
           message: "What is the interns name?"  
         },

         {
             type: "input",
             name: "id",
             message: "What is the interns id?",
         },
         {
             type: "input",
             name: "email",
             message: "What is the interns email?",
         },
         {
             type: "input",
             name: "school",
             message: "What is the interns school?"
         },
         
     ]).then(function(answers){
        const intern = new Intern(answers.name, answers.Id, answers.email, answers.officeNumber)
       team.push(intern)
       mainMenu()
     })

    };

    function memberEngineer() {
        return inquirer.prompt([
            {
                type: "input",
                name: "engineer",
                message: "What is the engineers name",
            },
            {
               type: "input", 
               name: "id",
               message: "What is the engineers id?",
                
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers Github?",
            },
        ]).then(function(answers){
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.officeNumber)
           team.push(engineer)
           mainMenu()
         })
    }
function makeTeam(){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
    }

 



    





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
