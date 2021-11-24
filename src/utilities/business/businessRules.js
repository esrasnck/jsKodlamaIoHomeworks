export default class BusinessRules{

    static run(...logics){
        for (const logic of logics) {
         
            if(logic.success ===false){
                 return logic;
             }
        }
        return null;  // bir dursun burada bir
    }
}
