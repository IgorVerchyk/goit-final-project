const { UsersRepository } = require("../repository");
require("dotenv").config();

class UserService {
  constructor() {
    this.repositories = {
      users: new UsersRepository(),
    };
  }

  async create(body) {
    const data = await this.repositories.users.create(body);
    return data;
  }

  async findByEmail(email) {
    const data = await this.repositories.users.findByEmail(email);
    return data;
  }

  async findById(id) {
    const data = await this.repositories.users.findById(id);
    return data;
  }

  async getCurrentUser(id) {
    const data = await this.repositories.users.getCurrentUser(id);
    return data;
  }

  async verify({ token }) {
    const user = await this.repositories.users.findByToken(token);
    if (user) {
      await user.updateOne({ verify: true, verifyToken: null });
      return true;
    }
    return false;
  }
}

module.exports = UserService;
