import { users } from "../data/users.js";
import BusinessRules from "../utilities/business/businessRules.js";

export default class EmployeeService {
  constructor(employeeValidation) {
   
  this.employeeValidation = employeeValidation;
   this.employees = [];
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
