import { createAction } from '@reduxjs/toolkit';

// create new project
const addProjectRequest = createAction('projects/addProjectRequest');
const addProjectSuccess = createAction('projects/addProjectSuccess');
const addProjectError = createAction('projects/addProjectError');
// create document
const addDocumentRequest = createAction('projects/addDocumentRequest');
const addDocumentSuccess = createAction('projects/addDocumentSuccess');
const addDocumentError = createAction('projects/addDocumentError');
// add coaborators
const addColaboratorsRequest = createAction('projects/addColaboratorsRequest');
const addColaboratorsSuccess = createAction('projects/addColaboratorsSuccess');
const addColaboratorsError = createAction('projects/addColaboratorsError');
// remove document
const removeDocumentRequest = createAction('projects/removeDocumentRequest');
const removeDocumentSuccess = createAction('projects/removeDocumentSuccess');
const removeDocumentError = createAction('projects/removeDocumentError');

// eslint-disable-next-line import/no-anonymous-default-export
const projectsActions = {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,

  addDocumentRequest,
  addDocumentSuccess,
  addDocumentError,

  addColaboratorsRequest,
  addColaboratorsSuccess,
  addColaboratorsError,

  removeDocumentRequest,
  removeDocumentSuccess,
  removeDocumentError,
};
export default projectsActions;
