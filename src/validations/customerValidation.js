import { CUSTOMER_VALIDATION } from "../data/types.js";
import ErrorDataResult from "../utilities/results/errorDataResult.js";


export default class CustomerValidation  {
  constructor() {
    this.customerValidationErrors = []
    this.requiredFields = CUSTOMER_VALIDATION.split(" ")
  }
  
  checkCustomerValidty(customer) {
    for (const field of this.requiredFields) {
      if (!customer[field]) {
        this.customerValidationErrors.push(
          new ErrorDataResult(
            `Validation problem. ${field} is required`,
            customer
          )
        );
       
      }
    }
    return true;
  }
}
