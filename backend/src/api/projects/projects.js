const express = require("express");
const ProjectController = require("../../controllers/projects");
const roles = require("../../middleware/roles.middleware");
const auth = require("../../middleware/auth.middleware");

const projectsRouter = express.Router();

projectsRouter.post("/", auth, ProjectController.createProject);

projectsRouter.delete("/:projectId", auth, ProjectController.removeProject);

projectsRouter.get("/:projectId", ProjectController.getProject);

projectsRouter.post(
  "/sprints/:projectId",
  auth,

  ProjectController.createSprint
);

projectsRouter.delete(
  "/sprints/:sprintId",
  auth,
  ProjectController.removeSprint
);

projectsRouter.post(
  "/tasks/:sprintId",
  auth,

  ProjectController.createTask
);

projectsRouter.patch("/tasks/:taskId", auth, ProjectController.updateTaskTime);

projectsRouter.delete("/tasks/:taskId", auth, ProjectController.removeTask);

module.exports = projectsRouter;
