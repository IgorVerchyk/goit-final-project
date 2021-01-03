const Project = require("../schemas/project");

class ProjectRepository {
  constructor() {
    this.model = Project;
  }

  async getProject(id) {
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
  async createNewSprint(id, title, startDate, endDate) {
    const result = await this.model.updateOne(
      { _id: id },
      {
        $push: {
          sprints: { title, startDate, endDate },
        },
      }
    );
  }
  async removeSprint(projectId, sprintId) {
    console.log(projectId, sprintId);
    const result = await this.model.updateOne(
      { _id: projectId },
      {
        $pull: { sprints: { _id: sprintId } },
      }
    );
    return result;
  }
}
module.exports = ProjectRepository;
