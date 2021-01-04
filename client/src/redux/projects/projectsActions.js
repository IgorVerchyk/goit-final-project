import { createAction } from '@reduxjs/toolkit';

export const fetchProjectsRequest = createAction(
  'projects/fetchProjectsRequest',
);
export const fetchProjectsSuccess = createAction(
  'projects/fetchProjectsSuccess',
);
export const fetchProjectsError = createAction('projects/fetchProjectsError');

export const addProjectRequest = createAction('projects/addProjectRequest');
export const addProjectSuccess = createAction('projects/addProjectSuccess');
export const addProjectError = createAction('projects/addProjectError');

export const cancelingProjectRequest = createAction(
  'projects/cancelingProjectRequest',
);
export const cancelingProjectSuccess = createAction(
  'projects/cancelingProjectSuccess',
);
export const cancelingProjectError = createAction(
  'projects/cancelingProjectError',
);

export const removeProjectRequest = createAction(
  'projects/removeProjectRequest',
);
export const removeProjectSuccess = createAction(
  'projects/removeProjectSuccess',
);
export const removeProjectError = createAction('projects/removeProjectError');
