const express = require('express');

const ProjectController = require('../../controllers/projects');
const auth = require('../../middleware/auth.middleware');
const roles = require('../../middleware/roles.middleware');
const {
  validateCreateProject,
  validateCreateSprint,
  validateCreateTask,
  // validateSprintTitle,
  // validateProjectTiltle,
  // validateUpdateColaborators,
  // validateUpdateTaskTime,
} = require('../../validation/validation');

const projectsRouter = express.Router();

projectsRouter.post(
  '/',
  auth,
  validateCreateProject,
  ProjectController.createProject
);

projectsRouter.delete('/:projectId', auth, ProjectController.removeProject);

projectsRouter.get('/:projectId', ProjectController.getProject);

projectsRouter.patch(
  '/:projectId',
  auth,
  // validateProjectTiltle,
  ProjectController.updateProjectTitle
);

projectsRouter.patch(
  '/:projectId',
  auth,
  // validateUpdateColaborators,
  ProjectController.updateColaborators
);

projectsRouter.post(
  '/sprints/:projectId',
  auth,
  validateCreateSprint,
  ProjectController.createSprint
);

projectsRouter.patch(
  '/sprints/:sprintId',
  auth,
  // validateSprintTitle,
  ProjectController.updateSprintTitle
);

projectsRouter.delete(
  '/sprints/:sprintId',
  auth,
  ProjectController.removeSprint
);

projectsRouter.post(
  '/tasks/:sprintId',
  auth,
  validateCreateTask,
  ProjectController.createTask
);

projectsRouter.patch(
  '/tasks/:taskId',
  auth,
  // validateUpdateTaskTime,
  ProjectController.updateTaskTime
);

projectsRouter.delete('/tasks/:taskId', auth, ProjectController.removeTask);

module.exports = projectsRouter;
