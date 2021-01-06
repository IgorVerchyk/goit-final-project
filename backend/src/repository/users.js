const User = require("../schemas/user");

class UsersRepository {
  constructor() {
    this.model = User;
  }

  // async findById(id) {
  //   const result = await this.model.findOne({ _id: id });
  //   return result;
  // }
  findById(id) {
    return this.model.findOne({ _id: id }).populate("projects");
  }

  async findByField(input) {
    const result = await this.model.findOne({ ...input });
    return result;
  }

  async create(body) {
    const user = new this.model(body);
    return user.save();
  }

  async updateToken(id, token) {
    await this.model.updateOne({ _id: id }, { token });
  }

  // async createNewProject(id, projectId) {
  //   const result = await this.model.findByIdAndUpdate(
  //     { _id: id },
  //     {
  //       $push: {
  //         projects: { _id: projectId },
  //       },
  //     }
  //   );
  //   return result;
  // }
  createNewProject(id, projectId) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          projects: { _id: projectId },
        },
      }
    );
  }

  async removeProject(id, projectId) {
    const result = await this.model.findOneAndUpdate(
      { _id: id },
      {
        $pull: { projects: projectId },
      }
    );
    return result;
  }
}

module.exports = UsersRepository;
