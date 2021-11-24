import { users } from "../data/users.js";


export default class UserService {
  constructor(loggerService) {
    //  this.users =[] // getCustomersFromDb() => diyeceğim gerçek hayatta

    this.loggerService = loggerService;
    this.load();
  }

  load() {
    for (const user of users) {
      console.log(user);
    }
  }
 
}
