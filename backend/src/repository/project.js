const Project = require("../schemas/project");

class ProjectRepository {
  constructor() {
    this.model = Project;
  }

  async getProgect(id) {
    const project = await this.model.findById({ _id: id });
    return project;
  }
  async createNewProject() {
    const project = new this.model();
    return project.save();
  }
  async removeProject(id) {
    const result = await this.model.findByIdAndRemove({
      _id: id,
    });
    return result;
  }
}
module.exports = ProjectRepository;
