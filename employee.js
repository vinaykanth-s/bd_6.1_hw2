let employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager' },
  { id: 3, name: 'Sam Johnson', position: 'Designer' },
  { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' },
];

const getEmployees = () => employees;

const getEmployeeById = (id) => {
  return employees.find((emp) => emp.id === id);
};

const addEmployee = (employee) => {
  let newEmployee = { id: employees.length + 1, ...employee };
  employees.push(newEmployee);
  return newEmployee;
};

module.exports = { getEmployees, getEmployeeById, addEmployee };
