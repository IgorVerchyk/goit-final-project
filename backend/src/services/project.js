// const { ProjectRepository } = require("../repository");

// class ProgectService {
//   constructor() {
//     this.repositories = {
//       contacts: new ProjectsRepository(),
//     };
//   }
// }

// module.exports = ProjectService;
const Project = require("../schemas/project");

const createProject = ({ email, sprints }) =>
  Project.create({ email, sprints });

const removeProject = (id) => {
  return Project.findByIdAndRemove({ _id: id });
};

module.exports = {
  createProject,
  removeProject,
};
