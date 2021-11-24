import { CUSTOMER} from "../data/types.js";
import { users } from "../data/users.js";
import ErrorResult from "../utilities/results/errorResult.js";
import SuccessResult from "../utilities/results/successResult.js";


export default class CustomerService {
  constructor(customerValidation) {
    this.customers = [];
    this.customerValidation = customerValidation;
    this.types=CUSTOMER
    this.load();
  }

  load() {
    for (const user of users) {
      if ( this.checkIfItsCustomer(user.type) && this.customerValidation.checkCustomerValidty(user)) {
        this.customers.push(user);
      }
    }
  }

  checkIfItsCustomer(user){

    if(user.type===CUSTOMER){
      return true
    }
  }

  listCustomers() {
    return this.customers;
  }

  getCustomerById(id) {
    return this.customers.find((u) => u.id === id);
  }

  add(customer){
    let result = this.customerValidation.checkCustomerValidty(customer);
    if(result === true){
       this.customers.push(customer);
       return new SuccessResult("Customer added !")
    }
    return new ErrorResult("Customer Cannot added !")

  }

  getCustomersSorted(){

    // elimizdeki datalar obje. ilkel tip arrayi. bu yüzden bizim bir sort mantığını vermemiz lazım.
    return  this.customers.sort((customer1,customer2)=>{
          // buraları dinamik yapabiliriz customer1["firstName"] => gibi
          if(customer1.firstName>customer2.firstName){
              return 1;
          }else if(customer1.firstName===customer2.firstName){
              return 0;

          }else{
              return -1;

          }
      })
  }
}
