const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const taskSchema = new Schema({
  deskr: { type: String, required: [true, "task title is required"] },

  planTime: { type: Number, required: true },
  spendTime: { type: Number, default: 0 },
});

const sprintSchema = new Schema({
  title: { type: String, required: [true, "sprint title is required"] },
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  tasks: [taskSchema],
});

const projectSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    minlength: 10,
  },
  sprints: { sprintSchema },
});

projectSchema.plugin(mongoosePaginate);
const Project = mongoose.model("Task", projectSchema);

module.exports = Project;
