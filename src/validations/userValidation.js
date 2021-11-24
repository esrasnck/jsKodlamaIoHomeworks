import ErrorDataResult from "../utilities/results/errorDataResult.js";

export default class UserValidaton {
  constructor() {
    this.userValidationErrors = []
  
  }

  checkUserValidty(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    for (const field of requiredFields) {
     
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
