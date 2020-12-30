const { ProjectRepository } = require("../repository");
const { UsersRepository } = require("../repository");

class ProjectService {
  constructor() {
    this.repositories = {
      project: new ProjectRepository(),
      user: new UsersRepository(),
    };
  }

  async getProject  (id) {
    const result = await this.repositories.project.findById({ _id: id });
  return result;
  } 

  async createProject({ id, title, descr }) {
    const newProject = await this.repositories.project.createNewProject();
    const projectId = newProject.id;
    const project = await this.repositories.user.createNewProject(
      id,
      projectId,
      title,
      descr
    );
    return project;
  }

 async updateProject (id, update){
   this.repositories.project.findByIdAndUpdate(
  {
    _id: id,
  },
  update
);}

  async removeProject({ id, projectId, repId }) {
    const removeFromRep = await this.repositories.project.removeProject(repId);

    const result = await this.repositories.user.removeProject(id, projectId);
    return result;
  }
}


module.exports = ProjectService;