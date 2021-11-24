import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import CustomerService from "../services/customerService.js";
import EmployeeService from "../services/employeeService.js";
import UserService from "../services/userService.js"
import CustomerValidation from "../validations/customerValidation.js"
import EmployeeValidation from "../validations/employeeValidation.js"
import UserValidaton from "../validations/userValidation.js";

console.log("user component loaded")
// kullanıcıları listelemek istedik örnek olarak

let logger1 = new MongoLogger();
let userValidaton = new UserValidaton();
let userService = new UserService(logger1);

userService.load();

