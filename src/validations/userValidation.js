import { USER_VALIDATION } from "../data/types.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";

export default class UserValidaton {
  constructor() {
    this.userValidationErrors = []
    this.requiredFields =USER_VALIDATION.split(" ")
  
  }

  checkUserValidty(user) {
    for (const field of this.requiredFields) {
      if (!user[field]) {
        this.userValidationErrors.push(
          new ErrorDataResult(`Validation problem. ${field} is required`, user)
        );
      
      }
    }
    return this.userValidationErrors;
  }

  checkUserAge(user) {
    if (Number.isNaN(Number.parseInt(user.age))) {
    
      this.userValidationErrors.push(new ErrorDataResult( `Validation problem. ${user.age} is not a number`, user)
      )
    }
    return this.userValidationErrors;

  };



}
