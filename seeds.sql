USE companyDB;

INSERT INTO departments (name)
VALUES 
	("Engineering"),
	("Executive"),
    ("Finance"),
	("Legal"),
    ("Marketing"),
	("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES 
	("Vice President", 1000000, 1),
	("Chief Executive Officer", 1000000, 2),
    ("Chief Financial Officer", 1000000, 3),
	("Lawyer",1000000, 4),
	("Vice President", 1000000, 5),
	("Vice President", 1000000, 6);

INSERT INTO employees (first_name, last_name, role_id)
VALUES 
	("Chad", "Fritz", 1),
	("Patrick", "Petro", 2),
	("Stephanie", "Fritz", 3),
	("Rachel", "Zarra-Locks", 4),
	("Katie", "Falvey", 5),
	("Ryan", "Locks", 6);