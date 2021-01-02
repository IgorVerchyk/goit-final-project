const express = require("express");
const ProjectController = require("../../controllers/projects");
const projectsRouter = express.Router();

projectsRouter.post("/", ProjectController.createProject);

projectsRouter.delete(
  "/:id,:projectId,:repId",
  ProjectController.removeProject
);

projectsRouter.get("/:projectId", ProjectController.getProject);

projectsRouter.post("/sprints/:projectId", ProjectController.createSprint);

projectsRouter.delete(
  "/sprints/:projectId,:sprintId",
  ProjectController.removeSprint
);

module.exports = projectsRouter;
