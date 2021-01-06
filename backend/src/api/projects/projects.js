const express = require("express");
const ProjectController = require("../../controllers/projects");
const projectsRouter = express.Router();
const auth = require("../../middleware/auth.middleware");

projectsRouter.post("/", auth, ProjectController.createProject);

projectsRouter.delete("/:projectId", auth, ProjectController.removeProject);

projectsRouter.get("/:projectId", ProjectController.getProject);

projectsRouter.post("/sprints/:projectId", ProjectController.createSprint);

projectsRouter.delete(
  "/sprints/:projectId,:sprintId",
  ProjectController.removeSprint
);

projectsRouter.post(
  "/tasks/:projectId,:sprintId",
  ProjectController.createTask
);

projectsRouter.patch(
  "/tasks/:projectId,:sprintId,:taskId",
  ProjectController.updateTaskTime
);

projectsRouter.delete(
  "/tasks/:projectId,:sprintId,:taskId",
  ProjectController.removeTask
);

module.exports = projectsRouter;
