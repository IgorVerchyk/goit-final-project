const Project = require("../schemas/project");

class ProjectRepository {
  constructor() {
    this.model = Project;
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
