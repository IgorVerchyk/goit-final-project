const Project = require('../schemas/project');

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
    const project = await this.model.findById(id);
    project.sprints.push({ title, startDate, endDate });
    project.save();
    return project;
  }

  async removeSprint(projectId, sprintId) {
    const project = await this.model.findById(projectId);
    project.sprints.remove(sprintId);

    project.save();
    return project;
  }

  async createNewTask(id, sprintId, descr, planTime) {
    const project = await this.model.findById(id);
    console.log(project);
    project.sprints.id(sprintId).tasks.push({ descr, planTime });

    project.save();
    return project;
  }

  async updateTaskTime(id, sprintId, taskId, spendTime) {
    const project = await this.model.findById(id);
    project.sprints.id(sprintId).tasks.findByIdAndUpdate(taskId, spendTime, {
      new: true,
    });
    console.log('updateTaskTime repositories', project);
    return project;
  }

  async removeTask(projectId, sprintId, taskId) {
    const project = await this.model.findById(projectId);
    project.sprints.id(sprintId).tasks.remove(taskId);

    project.save();
    return project;
  }
}
module.exports = ProjectRepository;
