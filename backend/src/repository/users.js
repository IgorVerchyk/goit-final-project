const User = require("../schemas/user");

class UsersRepository {
  constructor() {
    this.model = User;
  }
}

module.exports = UsersRepository;
