export default class BusinessRules{

    static run(...logics){
        for (const logic of logics) {
          console.log(logic)  
            if(!logic.success){
                 return logic;
             }
        }
        return null;  // bir dursun burada bir
    }
}
