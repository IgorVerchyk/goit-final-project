const { ProjectRepository } = require("../repository");
const { UsersRepository } = require("../repository");
const { Repository } = require("../repository");
const Project = require("../schemas/project");

class ProjectService {
  constructor() {
    this.repositories = {
      project: new ProjectRepository(),
      user: new UsersRepository(),
    };
  }

  async getProject(id) {
    const result = await this.repositories.project.getProject(id);
    return result;
  }

  async createProject({ id, title, descr }) {
    const newProject = await this.repositories.project.createNewProject();
    const projectId = newProject.id;
    const project = await this.repositories.user.createNewProject(
      id,
      projectId,
      title,
      descr
    );
    return project;
  }

  async removeProject({ id, projectId, repId }) {
    const removeFromRep = await this.repositories.project.removeProject(repId);

    const result = await this.repositories.user.removeProject(id, projectId);
    return result;
  }

  async createNewSprint(id, body) {
    const { title, startDate, endDate } = body;
    const result = await this.repositories.project.createNewSprint(
      id,
      title,
      startDate,
      endDate
    );
    return result;
  }

  async removeSprint(params) {
    const { projectId, sprintId } = params;
    console.log(projectId, sprintId);
    const result = await this.repositories.project.removeSprint(
      projectId,
      sprintId
    );
    return result;
  }
}

module.exports = ProjectService;
