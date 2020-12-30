const express = require("express");
const ProjectController = require("../../controllers/projects");
const projectsRouter = express.Router();
const Project = require("../../schemas/project");

projectsRouter.post("/", ProjectController.createProject);


projectsRouter.delete(
  "/:id,:projectId,:repId",
  ProjectController.removeProject
);

projectsRouter.post("/:projectId", ProjectController.createSprint);

projectsRouter.delete("/:projectId", ProjectController.deleteSprint);

module.exports = projectsRouter;
