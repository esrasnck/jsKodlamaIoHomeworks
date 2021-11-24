import { users } from "../data/users.js";
import BusinessRules from "../utilities/business/businessRules.js";

export default class CustomerService {
  constructor(customerValidation) {
    this.customers = [];
    this.customerValidation = customerValidation;
  }

  load() {
    for (const user of users) {
  
      if (
        user.type === "customer" &&
      this.customerValidation.checkCustomerValidty(user)
      ) {
        
        this.customers.push(user);
       
      }
    }
  }

  listCustomers() {
    return this.customers;
  }

  getCustomerById(id) {
    return this.customers.find((u) => u.id === id);
  }

  add(customer){
    
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
