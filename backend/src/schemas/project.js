const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const spendTimeSchema = new Schema({
  data: { type: Date, required: true },
  time: { type: Number, default: 0 },
});

const taskSchema = new Schema({
  descr: { type: String, required: [true, "task description is required"] },
  planTime: { type: Number, required: true },
  spendTime: [spendTimeSchema],
  total: { type: Number, default: 0 },
});

const sprintSchema = new Schema({
  title: { type: String, required: [true, "sprint title is required"] },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  tasks: [taskSchema],
});

const projectSchema = new Schema({
  colaborators: [String],
  sprints: [sprintSchema],
  owner: { type: Types.ObjectId, ref: "user" },
  title: { type: String },
  descr: { type: String },
  color: { type: String },
});

projectSchema.plugin(mongoosePaginate);
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
