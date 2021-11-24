import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";

import UserService from "../services/userService.js"

import UserValidaton from "../validations/userValidation.js";

console.log("user component loaded")
// kullanıcıları listelemek istedik örnek olarak

let logger1 = new MongoLogger();
let userValidaton = new UserValidaton();
let userService = new UserService(logger1);

userService.load();

