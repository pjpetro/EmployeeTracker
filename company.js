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
      choices: ["View All Employees", "View Employees By Manager", "View Roles", "View Departments", "Add Employee", "Add Role", "Add Department", "Update Employee Manager", "Remove Employee", "Remove Role", "Remove Department"]

    }
  ])

  .then(answers => {
    console.log(answers.selection)

    if (answers.selection === "View All Employees") {
      
          connection.query("SELECT * FROM employees", function(err, result) {

            console.table(result)
    
          })
 
    } 

    else if (answers.selection === "View Employees By Manager") {

      inquirer
        .prompt([
          {
            type: "input",
            name: "manager",
            message: "Manager Name",
          }
        ])

        .then(answers => {
          console.log(answers)

          connection.query("SELECT first_name, last_name FROM employees WHERE manager = ?", 
          
          [
            answers.manager
          ],
      
          function(err, result) {

            console.table(result)
    
          })

        })
      
    }

    else if (answers.selection === "View Roles") {

      connection.query("SELECT * FROM roles", function(err, result) {

        console.table(result)

      })

    }

    else if (answers.selection === "View Departments") {

      connection.query("SELECT * FROM departments", function(err, result) {

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
            name: "role",
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
          console.log(answers)

          
          connection.query(
            
            "INSERT INTO employees (first_name, last_name, role, department, manager) VALUES (?, ?, ?, ?, ?)", 
          
          [
            answers.fname, 
            answers.lname,
            answers.role, 
            answers.department, 
            answers.manager
          ],

            function(err, result) {
            
              if (err) throw err;
              console.log(result.affectedRows + " item updated\n")
          }) 
        }) 
    }
    
    else if (answers.selection === "Add Role") {

      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "Role Title",
          },
          {
            type: "input",
            name: "salary",
            message: "Role Salary",
          },
          {
            type: "input",
            name: "department",
            message: "Role Department",
          }
        ])

        .then(answers => {
          console.log(answers)

          
          connection.query(
            
            "INSERT INTO roles (title, salary, department) VALUES (?, ?, ?)", 
          
          [
            answers.title, 
            answers.salary, 
            answers.department, 
          ],

            function(err, result) {
            
              if (err) throw err;
              console.log(result.affectedRows + " item updated\n")
          }) 
        }) 
    }

    else if (answers.selection === "Add Department") {

      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Department Name",
          },
        ])

        .then(answers => {
          console.log(answers)

          
          connection.query(
            
            "INSERT INTO departments (name) VALUES (?)", 
          
          [
            answers.name, 
          ],

            function(err, result) {
            
              if (err) throw err;
              console.log(result.affectedRows + " item updated\n")
          }) 
        }) 
    }


   




  })

  
// connection.connect closing brace  
})
