const { ProjectRepository } = require("../repository");
const { UsersRepository } = require("../repository");

const projectRepo = new ProjectRepository();
const userRepo = new UsersRepository();

module.exports = async (req, res, next) => {
  const { projectId, sprintId, taskId } = req.params;
  const { id: userId } = req.user;

  try {
    if (projectId) {
      project = await projectRepo.getProject(projectId);

      if (project.owner.toString() === userId) {
        //Checks whether the user is the owner of project
        return next();
      }

      if (!req.method === "DELETE") {
        // Secures from project's removal by a non-owner
        return next();
      }

      const user = await userRepo.findById(userId);

      // !!delete slashes after schema update!!
      // if (project.admins.includes(user.email)) {
      //   return next();
      // }

      return res.status(404).send({
        message: "You don't have permission",
      });
    }
    if (sprintId) {
      project = await projectRepo.getBySprintId(sprintId);

      if (project.owner.toString() === userId) {
        //Checks whether the user is the owner of project - !!delete slashes after schema update!!
        return next();
      }

      const user = await userRepo.findById(userId);

      // Enables tasks creation via sprintId
      console.log(project.colaborators.includes(user.email));
      if (req.method === "POST" && project.collaborators.includes(user.email)) {
        return next();
      }

      // !!delete slashes after schema update!!
      // if (project.admins.includes(user.email)) {
      //   return next();
      // }

      return res.status(404).send({
        message: "You don't have permission",
      });
    }
    if (taskId) {
      project = await projectRepo.getByTaskId(taskId);

      if (project.owner.toString() === userId) {
        //Checks whether the user is the owner of project
        return next();
      }

      const user = await userRepo.findById(userId);

      if (
        project.colaborators.includes(user.email)
        // || project.admins.includes(user.email) - !!delete slashes after schema update!!
      ) {
        return next();
      }

      return res.status(404).send({
        message: "You don't have permission",
      });
    }
  } catch (e) {
    next(e);
  }
};
