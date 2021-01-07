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

  async getProjectByTitle(title) {
    try {
      const result = await this.repositories.project.findByField(title);
      return result;
    } catch (e) {
      next(e);
    }
  }

  async getProjectById(id) {
    try {
      const result = await this.repositories.project.getProject(id);
      return result;
    } catch (e) {
      throw new Error("No project with such ID");
    }
  }

  async createProject({ id }, { title, descr }) {
    const newProject = await this.repositories.project.createNewProject({
      title,
      descr,
      owner: id,
    });

    await this.repositories.user.createNewProject(id, newProject.id);

    const updatedUser = await this.repositories.user.findById(id);

    return updatedUser;
  }

  async removeProject({ projectId }, { id }) {
    await this.repositories.project.removeProject(projectId);

    await this.repositories.user.removeProject(id, projectId);

    const updatedUser = await this.repositories.user.findById(id);

    return updatedUser;
  }

  async createNewSprint(userId, projectId, body) {
    try {
      const updatedProject = await this.repositories.project.createNewSprint(
        projectId,
        body
      );

      if (!updatedProject) {
        return null;
      }

      const updatedUser = await this.repositories.user.findById(userId);

      return updatedUser;
    } catch (e) {
      throw e;
    }
  }

  async removeSprint(userId, sprintId) {
    try {
      const updatedProject = await this.repositories.project.removeSprint(
        sprintId
      );

      if (!updatedProject) {
        return null;
      }

      const updatedUser = await this.repositories.user.findById(userId);

      return updatedUser;
    } catch (e) {
      throw e;
    }
  }

  async createNewTask(userId, sprintId, body) {
    const updatedProject = await this.repositories.project.createNewTask(
      sprintId,
      body
    );

    if (!updatedProject) {
      return null;
    }

    const updatedUser = await this.repositories.user.findById(userId);

    return updatedUser;
  }

  async updateTaskTime(userId, taskId, body) {
    const { spendTime } = body;

    const result = await this.repositories.project.updateTaskTime(
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
