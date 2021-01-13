import { createAction } from '@reduxjs/toolkit';

// create new project
const addProjectRequest = createAction('projects/addProjectRequest');
const addProjectSuccess = createAction('projects/addProjectSuccess');
const addProjectError = createAction('projects/addProjectError');
// create Colaborators
const addDocumentRequest = createAction('projects/addDocumentRequest');
const addDocumentSuccess = createAction('projects/addDocumentSuccess');
const addDocumentError = createAction('projects/addDocumentError');
// add colaborators
const addColaboratorsRequest = createAction('projects/addColaboratorsRequest');
const addColaboratorsSuccess = createAction('projects/addColaboratorsSuccess');
const addColaboratorsError = createAction('projects/addColaboratorsError');
// remove Colaborators
const removeColaboratorsRequest = createAction(
  'projects/removeColaboratorsRequest',
);
const removeColaboratorsSuccess = createAction(
  'projects/removeColaboratorsSuccess',
);
const removeColaboratorsError = createAction(
  'projects/removeColaboratorsError',
);

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

  removeColaboratorsRequest,
  removeColaboratorsSuccess,
  removeColaboratorsError,
};
export default projectsActions;
