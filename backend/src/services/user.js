const { UsersRepository } = require("../repository");
const EmailService = require("./email");
const { ErrorHandler } = require("../helpers/errorHandler");
const { nanoid } = require("nanoid");
require("dotenv").config();

class UserService {
  constructor() {
    this.emailService = EmailService;
    this.repositories = {
      users: new UsersRepository(),
    };
  }

  async create(body) {
    const verifyToken = nanoid();
    const { email } = body;
    try {
      // await this.emailService.sendEmail(verifyToken, email);
      console.log(verifyToken);
      const data = await this.repositories.users.create({
        ...body,
        verifyToken,
      });
      return data;
    } catch (e) {
      throw new ErrorHandler(503, e.message, "Service unavailable");
    }
  }

  async findByEmail(email) {
    const data = await this.repositories.users.findByField(email);
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
    console.log(token);
    const user = await this.repositories.users.findByField(token);
    if (user) {
      await user.updateOne({ verify: true, verifyToken: null });
      return true;
    }
    return false;
  }
}

module.exports = UserService;
