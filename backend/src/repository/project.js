const Project = require('../schemas/project');

class ProjectRepository {
  constructor() {
    this.model = Project;
  }

  getByTaskId(taskId) {
    return this.model.findOne({
      sprints: { $elemMatch: { tasks: { $elemMatch: { _id: taskId } } } },
    });
  }

  getBySprintId(sprintId) {
    return this.model.findOne({ 'sprints._id': sprintId });
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

  removeProject(id) {
    return this.model.findByIdAndRemove({
      _id: id,
    });
  }

  createNewSprint(id, { title, startDate, endDate }) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { $push: { sprints: { title, startDate, endDate } } },
      { safe: true, multi: false }
    );
  }

  updateColaborators(id, data) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { $push: { colaborators: [{ data }] } },
      { safe: true, multi: false }
    );
  }

  removeSprint(sprintId) {
    return this.model.findOneAndUpdate(
      { 'sprints._id': sprintId },
      { $pull: { sprints: { _id: sprintId } } },
      { safe: true, multi: false }
    );
  }

  createNewTask(sprintId, { descr, planTime, spendTime }) {
    return this.model.findOneAndUpdate(
      { 'sprints._id': sprintId },
      { $push: { 'sprints.$.tasks': { descr, planTime, spendTime } } },
      { safe: true, multi: false }
    );
  }

  updateTaskTime(taskId, spendTime) {
    return this.model.findOneAndUpdate(
      {
        sprints: { $elemMatch: { tasks: { $elemMatch: { _id: taskId } } } },
      },
      { $set: { 'sprints.$[].tasks.$[task].spendTime': spendTime } },
      {
        arrayFilters: [{ 'task._id': taskId }],
      }
    );
  }

  removeTask(taskId) {
    return this.model.findOneAndUpdate(
      {
        sprints: { $elemMatch: { tasks: { $elemMatch: { _id: taskId } } } },
      },
      { $pull: { 'sprints.$[].tasks': { _id: taskId } } }
    );
  }
}
module.exports = ProjectRepository;
