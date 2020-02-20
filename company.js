// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "companyDB"
});

// Initiate MySQL Connection.
connection.connect(function(err) { 
  
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as ID: " + connection.threadId);

  inquirer
  .prompt([
    {
      type: "list",
      name: "selection",
      message: "Select Action",
      choices: ["View All Employees", "Add Employee", "Update Employee Manager", "Remove Employee"]

    }
  ])

  .then(answers => {
    console.log(answers.selection)

    if (answers.selection === "View All Employees") {
      
      connection.query("SELECT * FROM employees", function(err, result) {

        console.table(result)

      })
    } 
    
    else if (answers.selection === "Add Employee") {
      
      inquirer
        .prompt([
          {
            type: "input",
            name: "fname",
            message: "Employee First Name",

          },
          {
            type: "input",
            name: "lname",
            message: "Employee Last Name",

          },
          {
            type: "input",
            name: "title",
            message: "Employee Job Title",

          },
          {
            type: "input",
            name: "department",
            message: "Employee Department",

          },
          {
            type: "input",
            name: "manager",
            message: "Employee Manager",

          }
        ])

        .then(answers => {
          console.log(answers.selection)

          // connection.query("ALTER TABLE employees", function(err, result) {

            
    
          // })
        
        
        }) 


    }
   
  })

  
// connection.connect closing brace  
})
