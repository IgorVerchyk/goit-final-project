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

  async createProject({ id }, { title, descr }) {
    const newProject = await this.repositories.project.createNewProject({
      title,
      descr,
      owner: id,
    });

    const updatedUser = await this.repositories.user.createNewProject(
      id,
      newProject._id
    );

    return newProject;
  }

  async removeProject({ projectId }, { id }) {
    console.log(projectId);
    const removeFromRep = await this.repositories.project.removeProject(
      projectId
    );
    console.log(removeFromRep);
    const result = await this.repositories.user.removeProject(id, projectId);
    console.log(result);
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

  async createNewTask(id, sprintId, body) {
    const { descr, planTime } = body;
    const result = await this.repositories.project.createNewTask(
      id,
      sprintId,
      descr,
      planTime
    );
    return result;
  }

  async updateTaskTime(id, sprintId, taskId, body) {
    const { spendTime } = body;
    console.log("udate services", id, sprintId, taskId, spendTime);

    const result = await this.repositories.project.updateTaskTime(
      id,
      sprintId,
      taskId,
      spendTime
    );
    return result;
  }

  async removeTask(params) {
    const { projectId, sprintId, taskId } = params;
    console.log(projectId, sprintId, taskId);
    const result = await this.repositories.project.removeTask(
      projectId,
      sprintId,
      taskId
    );
    return result;
  }
}

module.exports = ProjectService;
