import CustomerService from "../services/customerService.js";
import CustomerValidation from "../validations/customerValidation.js";
import Customer from "../models/customer.js"


let customerValidation = new CustomerValidation()
let customerService = new CustomerService(customerValidation)

console.log(customerService.add(new Customer(11,"Umut","Köse","İskenderun")))
console.log(customerService.customers)
console.log(customerService.customerValidation)

console.log(customerService.listCustomers());
console.log(customerService.getCustomerById(6))