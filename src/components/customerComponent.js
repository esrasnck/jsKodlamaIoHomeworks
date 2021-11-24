import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import CustomerValidation from "../validations/customerValidation.js";
import UserValidaton from "../validations/userValidation.js";

let userValidaton = new UserValidaton();
let customerValidation = new CustomerValidation(userValidaton)
let customerService = new CustomerService(customerValidation)

customerService.load();
console.log(customerService.customers)
console.log(customerService.customerValidation)
console.log(userValidaton.userValidationErrors) // burada sorun var.
console.log(customerService.listCustomers);
console.log(customerService.getCustomerById(6))