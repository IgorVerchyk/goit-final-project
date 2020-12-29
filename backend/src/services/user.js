const { ErrorHandler } = require("../helpers/errorHandler");
const { UsersRepository } = require("../repository");
require("dotenv").config();

class UserService {
  constructor() {
    this.repositories = {
      users: new UsersRepository(),
    };
  }
}

module.exports = UserService;
