const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const taskSchema = new Schema({
  deskr: { type: String, required: [true, "task title is required"] },

  planTime: { type: Number, required: true },
  spendTime: { type: Number, default: 0 },
});

const colaboratorsSchema = new Schema({
  email: { type: String },
});

const sprintSchema = new Schema({
  title: { type: String, required: [true, "sprint title is required"] },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  tasks: [taskSchema],
});

const projectSchema = new Schema({
  colaborators: [colaboratorsSchema],
  sprints: [sprintSchema],
});

projectSchema.plugin(mongoosePaginate);
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
