const Project = require("../schemas/project");

class ProjectRepository {
  constructor() {
    this.model = Project;
  }

  findByField(input) {
    return this.model.findOne({ ...input });
  }

  getProject(id) {
    return this.model.findById({ _id: id });
  }

  createNewProject({ title, descr, owner }) {
    return new this.model({
      title,
      descr,
      owner,
    }).save();
  }

  async removeProject(id) {
    const result = await this.model.findByIdAndRemove({
      _id: id,
    });
    return result;
  }

  createNewSprint(id, { title, startDate, endDate }) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { $push: { sprints: { title, startDate, endDate } } },
      { safe: true, multi: true }
    );
  }

  removeSprint(sprintId) {
    return this.model.findOneAndUpdate(
      { "sprints._id": sprintId },
      { $pull: { sprints: { _id: sprintId } } },
      { safe: true, multi: true }
    );
  }

  createNewTask(sprintId, { descr, planTime, spendTime }) {
    return this.model.findOneAndUpdate(
      { "sprints._id": sprintId },
      { $push: { "sprints.$.tasks": { descr, planTime, spendTime } } },
      { safe: true, multi: false }
    );
  }

  // async updateTaskTime(taskId, spendTime) {
  //   const project = await this.model.findOne({ "sprints.tasks._id": taskId });
  //   const sprint = await project.sprints.findOne({ "tasks._id": taskId });
  //   project.sprints.findByIdAndUpdate(taskId, spendTime, {
  //     new: true,
  //   });

  //   return project;
  //   // return this.model.findOneAndUpdate(
  //   //   { "sprints.tasks._id": taskId },
  //   //   { $push: { "sprints.$[outer].tasks": spendTime } },
  //   //   {
  //   //     arrayFilters: [{ "outer._id": taskId }],
  //   //     safe: true,
  //   //     multi: false,
  //   //   }
  //   // );
  // }

  async removeTask(projectId, sprintId, taskId) {
    const project = await this.model.findById(projectId);
    project.sprints.id(sprintId).tasks.remove(taskId);

    project.save();
    return project;
  }
}
module.exports = ProjectRepository;
