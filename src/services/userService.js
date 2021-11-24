import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
  constructor(loggerService) {
    //  this.users =[] // getCustomersFromDb() => diyeceğim gerçek hayatta

    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      console.log(user);
    }
  }


  add(user) {
    switch (user.type) {
      case "customer":
     //   if (!this.checkCustomerValidtyForErrors(user)) {
       //     this.customers.push(user);
         // }

        break;
      case "employee":
        //if (!this.checkEmployeeValidtyForErrors(user)) {
          //  this.employees.push(user);
          //}
        break;
      default:
        // this.errors.push(new DataError("this user Cannot be added, wrong user type", user));
        break;
    }
    this.loggerService.log(user);
  }
 
}
