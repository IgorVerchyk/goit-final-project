import { createAction } from '@reduxjs/toolkit';

// create new project
const addProjectRequest = createAction('projects/addProjectRequest');
const addProjectSuccess = createAction('projects/addProjectSuccess');
const addProjectError = createAction('projects/addProjectError');
// create document
const addDocumentRequest = createAction('projects/addDocumentRequest');
const addDocumentSuccess = createAction('projects/addDocumentSuccess');
const addDocumentError = createAction('projects/addDocumentError');
// remove document
const removeDocumentRequest = createAction('projects/removeDocumentRequest');
const removeDocumentSuccess = createAction('projects/removeDocumentSuccess');
const removeDocumentError = createAction('projects/removeDocumentError');
// update update
const updateDocumentRequest = createAction('projects/updateDocumentRequest');
const updateDocumentSuccess = createAction('projects/updateDocumentSuccess');
const updateDocumentError = createAction('projects/updateDocumentError');

// eslint-disable-next-line import/no-anonymous-default-export
const projectsActions = {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,

  addDocumentRequest,
  addDocumentSuccess,
  addDocumentError,

  removeDocumentRequest,
  removeDocumentSuccess,
  removeDocumentError,

  updateDocumentRequest,
  updateDocumentSuccess,
  updateDocumentError,
};
export default projectsActions;
