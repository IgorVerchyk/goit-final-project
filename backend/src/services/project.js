const projectsRouter = require("../api/projects/projects");
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

  async createProject({ id }, { title, descr, color }) {
    const newProject = await this.repositories.project.createNewProject({
      title,
      descr,
      color,
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
      const result = await this.repositories.project.createNewSprint(
        projectId,
        body
      );

      return this.checkResultAndGetUser(result, userId);
    } catch (e) {
      throw e;
    }
  }
  async updateProjectTitle(userId, projectId, body) {
    try {
      const { title } = body;

      const result = await this.repositories.project.updateProjectTitle(
        projectId,
        title
      );

      return this.checkResultAndGetUser(result, userId);
    } catch (e) {
      throw e;
    }
  }

  async updateColaborators(userId, projectId, body) {
    try {
      const result = await this.repositories.project.updateColaborators(
        projectId,
        body
      );

      return this.checkResultAndGetUser(result, userId);
    } catch (e) {
      throw e;
    }
  }

  async updateSprintTitle(userId, sprintId, body) {
    try {
      const { title } = body;

      const result = await this.repositories.project.updateSprintTitle(
        sprintId,
        title
      );

      return this.checkResultAndGetUser(result, userId);
    } catch (e) {
      throw e;
    }
  }

  async removeSprint(userId, sprintId) {
    try {
      const result = await this.repositories.project.removeSprint(sprintId);

      return this.checkResultAndGetUser(result, userId);
    } catch (e) {
      throw e;
    }
  }

  async createNewTask(userId, sprintId, body) {
    const result = await this.repositories.project.createNewTask(
      sprintId,
      body
    );

    return this.checkResultAndGetUser(result, userId);
  }

  async updateTaskTitle(userId, taskId, body) {
    const { descr } = body;

    const result = await this.repositories.project.updateTaskTitle(
      taskId,
      descr
    );

    return this.checkResultAndGetUser(result, userId);
  }

  async updateTaskTime(userId, taskId, body) {
    const { spendTime } = body;

    const result = await this.repositories.project.updateTaskTime(
      taskId,
      spendTime
    );

    return this.checkResultAndGetUser(result, userId);
  }

  async removeTask(userId, taskId) {
    const result = await this.repositories.project.removeTask(taskId);

    return this.checkResultAndGetUser(result, userId);
  }

  async checkResultAndGetUser(result, userId) {
    if (!result) {
      return null;
    }

    const updatedUser = await this.repositories.user.findById(userId);

    return updatedUser;
  }
}

module.exports = ProjectService;
