import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import CustomerValidation from "../validations/customerValidation.js";
import UserValidaton from "../validations/userValidation.js";
import Customer from "../models/customer.js"

let userValidaton = new UserValidaton();
let customerValidation = new CustomerValidation(userValidaton)
let customerService = new CustomerService(customerValidation)

console.log(customerService.add(new Customer(11,"Umut","Köse","İskenderun","16")))
console.log(customerService.customers)
console.log(customerService.customerValidation)
console.log(userValidaton.userValidationErrors) // burada sorun var.
console.log(customerService.listCustomers());
console.log(customerService.getCustomerById(6))