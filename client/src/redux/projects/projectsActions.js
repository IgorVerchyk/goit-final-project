import { createAction } from '@reduxjs/toolkit';

const fetchProjectsRequest = createAction('projects/fetchProjectsRequest');
const fetchProjectsSuccess = createAction('projects/fetchProjectsSuccess');
const fetchProjectsError = createAction('projects/fetchProjectsError');
// create new project
const addProjectRequest = createAction('projects/addProjectRequest');
const addProjectSuccess = createAction('projects/addProjectSuccess');
const addProjectError = createAction('projects/addProjectError');
// remove project
const removeProjectRequest = createAction('projects/removeProjectRequest');
const removeProjectSuccess = createAction('projects/removeProjectSuccess');
const removeProjectError = createAction('projects/removeProjectError');
// create new sprint
const addSprintRequest = createAction('projects/addSprintRequest');
const addSprintSuccess = createAction('projects/addSprintSuccess');
const addSprintError = createAction('projects/addSprintError');
// remove sprint
const removeSprintRequest = createAction('projects/removeSprintRequest');
const removeSprintSuccess = createAction('projects/removeSprintSuccess');
const removeSprintError = createAction('projects/removeSprintError');
// add new task
const addTaskRequest = createAction('projects/addTaskRequest');
const addTaskSuccess = createAction('projects/addTaskSuccess');
const addTaskError = createAction('projects/addTaskError');
//remove task
const removeTaskRequest = createAction('projects/removeTaskRequest');
const removeTaskSuccess = createAction('projects/removeTaskSuccess');
const removeTaskError = createAction('projects/removeTaskError');

// eslint-disable-next-line import/no-anonymous-default-export
const projectsActions = {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,

  addProjectRequest,
  addProjectSuccess,
  addProjectError,

  removeProjectRequest,
  removeProjectSuccess,
  removeProjectError,

  addSprintRequest,
  addSprintSuccess,
  addSprintError,

  removeSprintRequest,
  removeSprintSuccess,
  removeSprintError,

  addTaskRequest,
  addTaskSuccess,
  addTaskError,

  removeTaskRequest,
  removeTaskSuccess,
  removeTaskError,
};
export default projectsActions;
