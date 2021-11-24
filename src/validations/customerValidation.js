import ErrorDataResult from "../utilities/results/errorDataResult.js";

// refaktör edilecek

export default class CustomerValidation  {
  constructor(userValidaton) {
    this.userValidation =userValidaton
    this.customerValidationErrors = []   
  }

  checkCustomerValidty(customer) {
  
    let requiredFields = "creditCardNumber".split(" ");
    let isUserValid =this.userValidation.checkUserValidty(customer);
    let isUserAgeValid = this.userValidation.checkUserAge(customer)
  
    if(isUserValid==undefined){
        this.customerValidationErrors.push(isUserValid)
    }
    if(isUserAgeValid==undefined){
        this.customerValidationErrors.push(isUserAgeValid)
    }
    for (const field of requiredFields) {
      if (!customer[field]) {
       
        this.customerValidationErrors.push(
          new ErrorDataResult(
            `Validation problem. ${field} is required`,
            customer
          )
        );
        return false;
      }
    }
    return true;
  }
}
