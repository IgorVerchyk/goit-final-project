const User = require("../schemas/user");

class UsersRepository {
  constructor() {
    this.model = User;
  }

  async findById(id) {
    const result = await this.model.findOne({ _id: id });
    return result;
  }

  async findByField(input) {
    console.log(input);
    const result = await this.model.findOne({ input });
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

  async updateProjectTitle (id, projectId, title) {
    const result = await this.model.findById(id);
    result.projects.id(projectId).push({title: title});
    result.save();
    return result;
  }
    
}

module.exports = UsersRepository;
