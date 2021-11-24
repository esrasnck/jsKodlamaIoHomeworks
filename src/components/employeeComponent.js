import EmployeeService from "../services/employeeService.js";
import EmployeeValidation from "../validations/employeeValidation.js";
import UserValidaton from "../validations/userValidation.js";
import Employee from "../models/employee.js"



let userValidation = new UserValidaton();
let employeeValidation = new EmployeeValidation(userValidation);
let employeeService = new EmployeeService(employeeValidation)


console.log(employeeService.add(new Employee(11,"Umut","Köse","İskenderun")))
console.log(employeeService.employees)
console.log(employeeService.employeeValidation) // şu istediğim gibi olmadı... iki tarafta da
console.log(userValidation.userValidationErrors) // buna da ulaşamıyorum.
console.log(employeeService.listEmployee());
console.log(employeeService.getEmployeeById(3))
employeeService.load()