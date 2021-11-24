import EmployeeService from "../services/employeeService.js";
import EmployeeValidation from "../validations/employeeValidation.js";
import Employee from "../models/employee.js"


let employeeValidation = new EmployeeValidation();
let employeeService = new EmployeeService(employeeValidation)


console.log(employeeService.add(new Employee(11,"Umut","Köse","İskenderun")))
console.log(employeeService.employees)
console.log(employeeService.employeeValidation)

console.log(employeeService.listEmployee());
console.log(employeeService.getEmployeeById(3))
console.log(employeeService.load())