let { getEmployees, getEmployeeById, addEmployee } = require('../employee');

describe('Employees Functions', () => {
  it('should get all employees', () => {
    let employees = getEmployees();
    expect(employees.length).toBe(4);
    expect(employees).toEqual([
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'Product Manager' },
      { id: 3, name: 'Sam Johnson', position: 'Designer' },
      { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' },
    ]);
  });

  it('should return a employee by id', () => {
    let employee = getEmployeeById(1);
    expect(employee).toEqual({
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
    });
  });

  it('should return undefined for a non-existent employee', () => {
    let employee = getEmployeeById(99);
    expect(employee).toBeUndefined();
  });

  it('should add a new employee', () => {
    let newEmployee = { name: 'Vinay Kanth', position: 'Frontend Developer' };
    let addedEmployee = addEmployee(newEmployee);
    expect(addedEmployee).toEqual({
      id: 5,
      name: 'Vinay Kanth',
      position: 'Frontend Developer',
    });

    const employees = getEmployees();
    expect(employees.length).toBe(5);
  });
});
