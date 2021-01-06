const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const taskSchema = new Schema({
  descr: { type: String, required: [true, "task description is required"] },
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
  owner: { type: Types.ObjectId, ref: "user" },
  title: { type: String },
  descr: { type: String },
});

projectSchema.plugin(mongoosePaginate);
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
