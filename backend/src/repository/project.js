const Project = require("../schemas/project");

class ProjectRepository {
  constructor() {
    this.model = Project;
  }
}
module.exports = ProjectRepository;
