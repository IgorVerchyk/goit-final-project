const express = require("express");

const ProjectController = require("../../controllers/projects");
const auth = require("../../middleware/auth.middleware");
const roles = require("../../middleware/roles.middleware");

const projectsRouter = express.Router();

projectsRouter.post("/", auth, ProjectController.createProject);

projectsRouter.delete("/:projectId", auth, ProjectController.removeProject);

projectsRouter.get("/:projectId", ProjectController.getProject);

projectsRouter.patch("/:projectId", auth, ProjectController.updateProjectTitle);

projectsRouter.patch("/:projectId", auth, ProjectController.updateColaborators);

projectsRouter.post(
  "/sprints/:projectId",
  auth,
  ProjectController.createSprint
);

projectsRouter.patch(
  "/sprints/:sprintId",
  auth,
  ProjectController.updateSprintTitle
);

projectsRouter.delete(
  "/sprints/:sprintId",
  auth,
  ProjectController.removeSprint
);

projectsRouter.post("/tasks/:sprintId", auth, ProjectController.createTask);

projectsRouter.patch("/tasks/:taskId", auth, ProjectController.updateTaskTitle);

projectsRouter.patch("/tasks/:taskId", auth, ProjectController.updateTaskTime);

projectsRouter.delete("/tasks/:taskId", auth, ProjectController.removeTask);

module.exports = projectsRouter;
