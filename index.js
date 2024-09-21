const express = require('express');
const { getEmployees, getEmployeeById, addEmployee } = require('./employee');

const app = express();
const port = 3010;

app.use(express.json());

app.get('/employees', (req, res) => {
  res.json(getEmployees());
});

app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = getEmployeeById(id);
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

app.post('/employees', (req, res) => {
  const newEmployee = addEmployee(req.body);
  res.status(201).json(newEmployee);
});

app.get('/', (req, res) => {
  res.send('BD 6.1 HW2');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
