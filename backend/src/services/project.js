const { ProjectRepository } = require("../repository");

class ProgectService {
  constructor() {
    this.repositories = {
      contacts: new ProjectsRepository(),
    };
  }
}

module.exports = ProgectService;
