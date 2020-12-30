const express = require("express");
const ProjectController = require("../../controllers/projects");
const projectsRouter = express.Router();
const Project = require("../../schemas/project");

projectsRouter.post("/", ProjectController.createProject);

projectsRouter.delete(
  "/:id,:projectId,:repId",
  ProjectController.removeProject
);

projectsRouter.get("/:projectId", ProjectController.getProject);

projectsRouter.post("/:projectId", ProjectController.createSprint);

projectsRouter.delete("/:projectId,sprintId", ProjectController.deleteSprint);

module.exports = projectsRouter;
