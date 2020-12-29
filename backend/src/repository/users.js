const User = require("../schemas/user");

class UsersRepository {
  constructor() {
    this.model = User;
  }

  async findById(id) {
    const result = await this.model.findOne({ _id: id });
    return result;
  }

  async findByEmail(email) {
    const result = await this.model.findOne({ email });
    return result;
  }

  async create(body) {
    const user = new this.model(body);
    return user.save();
  }

  async updateToken(id, token) {
    await this.model.updateOne({ _id: id }, { token });
  }

  async getCurrentUser(id) {
    const user = await this.model.findOne(
      { _id: id },
      "_id username email password avatar createdAt",
    );
    return user;
  }
}

module.exports = UsersRepository;
