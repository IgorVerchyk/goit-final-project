const express = require("express");
const ProjectController = require("../../controllers/projects");
const projectsRouter = express.Router();

projectsRouter.post("/", ProjectController.createProject);

projectsRouter.delete("/:projectId", ProjectController.removeProject);

module.exports = projectsRouter;
