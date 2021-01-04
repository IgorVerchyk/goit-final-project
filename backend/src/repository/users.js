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

  async createNewProject(id, projectId, title, descr) {
    const result = await this.model.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          projects: { projectId, title, descr },
        },
      }
    );
    return result;
  }

  async removeProject(id, projectId) {
    console.log(id, projectId);
    const result = await this.model.updateOne(
      { _id: id },
      {
        $pull: { projects: { _id: projectId } },
      }
    );
    return result;
  }
}

module.exports = UsersRepository;
