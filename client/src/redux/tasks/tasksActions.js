import { createAction } from '@reduxjs/toolkit';

export const addTaskRequest = createAction('tasks/addTaskRequest');
export const addTaskSuccess = createAction('tasks/addTaskSuccess');
export const addTaskError = createAction('tasks/addTaskError');

// export const removeTaskRequest = createAction('tasks/removeTaskRequest');
// export const removeTaskSuccess = createAction('tasks/removeTaskSuccess');
// export const removeTaskError = createAction('tasks/removeTaskError');
