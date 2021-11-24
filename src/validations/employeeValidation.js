import UserValidaton from "./userValidation.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";

export default class EmployeeValidation {
  constructor(userValidation) {
    this.userValidation = userValidation;
    this.employeeValidationErrors = [];
  }

  checkEmployeeValidty(employee) {
    let requiredFields = "salary".split(" ");
    let isUserValid = this.userValidation.checkUserValidty(employee);
    let isUserAgeValid = this.userValidation.checkUserAge(employee);

    if (isUserValid == undefined) {
      this.employeeValidationErrors.push(isUserValid);
    }
    if (isUserAgeValid == undefined) {
      this.employeeValidationErrors.push(isUserAgeValid);
    }
    for (const field of requiredFields) {
      if (!employee[field]) {
        this.employeeValidationErrors.push(
          new ErrorDataResult(
            `Validation problem. ${field} is required`,
            employee
          )
        );
        return false;
      }
  
    }
    return true;
  }
}
