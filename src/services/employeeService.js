import { users } from "../data/users.js";
import BusinessRules from "../utilities/business/businessRules.js";
import ErrorResult from "../utilities/results/errorResult.js";
import SuccessResult from "../utilities/results/successResult.js";

export default class EmployeeService {
  constructor(employeeValidation) {
   this.employeeValidation = employeeValidation;
   this.employees = [];
   this.load();
  }

  load() {
    for (const user of users) {
      if ( 
        user.type === "employee" &&
        this.employeeValidation.checkEmployeeValidty(user)
      ) {
        this.employees.push(user);
      }
    }
  }
  add(employee){
    let result = this.employeeValidation.checkEmployeeValidty(employee);
    if(result === true){
       this.employee.push(employee);
       return new SuccessResult("Customer added !")
    }
    return new ErrorResult("Customer Cannot added !")

  }


 listEmployee() {
    return this.employees
 }

 getEmployeeById(id) {
    return this.employees.find(u=> u.id ===id)
 }

 getEmployeesSorted(){

  // elimizdeki datalar obje. ilkel tip arrayi. bu yüzden bizim bir sort mantığını vermemiz lazım.
  return  this.employees.sort((employee1,employee2)=>{
        // buraları dinamik yapabiliriz customer1["firstName"] => gibi
        if(employee1.firstName>employee2.firstName){
            return 1;
        }else if(employee1.firstName===employee2.firstName){
            return 0;

        }else{
            return -1;

        }
    })
}

}
