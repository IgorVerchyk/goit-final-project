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

const getProject = (id) => Project.findById({ _id: id });

const updateProject = (id, update) =>
  Project.findByIdAndUpdate(
    {
      _id: id,
    },
    update
  );

module.exports = {
  createProject,
  removeProject,
  getProject,
  updateProject,
};
