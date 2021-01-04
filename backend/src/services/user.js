const { UsersRepository } = require("../repository");
const EmailService = require("./email");
const { ErrorHandler } = require("../helpers/errorHandler");
const { nanoid } = require("nanoid");
require("dotenv").config();

class UserService {
  constructor() {
    this.emailService = new EmailService();
    this.repositories = {
      users: new UsersRepository(),
    };
  }

  async create(body) {
    const verifyToken = nanoid();
    const { email } = body;
    try {
      await this.emailService.sendEmail(verifyToken, email);
    } catch (e) {
      // throw new ErrorHandler(503, e.message, "Service unavailable");
    }
    const data = await this.repositories.users.create({ ...body, verifyToken });
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
