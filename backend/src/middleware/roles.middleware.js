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

      if (project.admins.includes(user.email)) {
        return next();
      }

      return res.send(404).send({
        message: "You don't have permission",
      });
    }
    if (sprintId) {
      project = await projectRepo.getBySprintId(sprintId);

      if (project.owner.toString() === userId) {
        //Checks whether the user is the owner of project
        return next();
      }

      console.log(
        project.collaborators.includes(user.email),
        project.admins.includes(user.email)
      );

      const user = await userRepo.findById(userId);

      if (project.admins.includes(user.email)) {
        return next();
      }

      return res.send(404).send({
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
        project.collaborators.includes(user.email) ||
        project.admins.includes(user.email)
      ) {
        return next();
      }

      return res.send(404).send({
        message: "You don't have permission",
      });
    }
  } catch (e) {
    next(e);
  }
};
