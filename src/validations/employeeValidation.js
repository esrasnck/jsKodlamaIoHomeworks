import UserValidaton from "./userValidation.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";
import { EMPLOYEE_VALIDATION } from "../data/types.js";

export default class EmployeeValidation {
  constructor() {
    this.employeeValidationErrors = [];
    this.requiredFields = EMPLOYEE_VALIDATION.split(" ")
  }

  checkEmployeeValidty(employee) {
    for (const field of this.requiredFields) {
      if (!employee[field]) {
        this.employeeValidationErrors.push(
          new ErrorDataResult(
            `Validation problem. ${field} is required`,
            employee
          )
        );
      }
    }
    return true;
  }
}
