// const result = require('./mylib')
// console.log(result);
// console.log(result.firstName)
//object destrcturing 
const { firstName } = require('./mylib');
const Employee = require('./employee')
console.log(firstName)
const { sayGreet } = require('./services/greeter.service')

let emp = new Employee();
console.log(Employee)
console.log(emp.findAll())
// console.log(greeter.sayGreet())
console.log(sayGreet());

