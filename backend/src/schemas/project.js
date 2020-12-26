// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const mongoosePaginate = require("mongoose-paginate-v2");

// const taskSchema = new Schema({
//   deskr: { type: String, required: true },
//   startDate: { type: Number, required: true },
//   endDate: { type: Number, required: true },
//   planTime: { type: Number, required: true },
//   spendTime: { type: Number, required: true },
// });

// const sprintSchema = new Schema({ tasks: [taskShema] });

// const projectSchema = new Schema({
//   email: {
//     type: String,
//     required: [true, "Contact email is required"],
//     minlength: 10,
//   },
//   sprints: { sprintSchema },
// });

// progectSchema.plugin(mongoosePaginate);
// const Project = mongoose.model("Task", projectSchema);

// module.exports = Project;
