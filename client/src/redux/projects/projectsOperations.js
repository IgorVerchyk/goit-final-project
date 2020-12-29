import axios from 'axios';

import {
  readyProjectRequest,
  readyProjectSuccess,
  readyProjectError,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  cancelingProjectRequest,
  cancelingProjectSuccess,
  cancelingProjectError,
  removeProjectRequest,
  removeProjectSuccess,
  removeProjectError,
} from './projectsActions';

const baseURL = 'http://localhost:3456';

const fetchProjects = () => async dispatch => {
  dispatch(fetchProjectsRequest());

  try {
    const { data } = await axios.get(`${baseURL}/projects`);
    dispatch(fetchProjectsSuccess(data));
  } catch (error) {
    dispatch(fetchProjectsError(error.message));
  }
};

const readyProject = (projectName, descr, color) => async dispatch => {
  dispatch(readyProjectRequest());

  try {
    const { data } = await axios.post(`${baseURL}/projects`, {
      projectName,
      descr,
      color,
    });
    dispatch(readyProjectSuccess(data));
  } catch (error) {
    dispatch(readyProjectError(error.message));
  }
};

const cancelingProject = () => async dispatch => {
  dispatch(cancelingProjectRequest());

  try {
    await axios.get(`${baseURL}/projects`);
    dispatch(cancelingProjectSuccess());
  } catch (error) {
    dispatch(cancelingProjectError(error.message));
  }
};

const removeProject = id => async dispatch => {
  dispatch(removeProjectRequest());

  try {
    await axios.delete(`${baseURL}/projects/${id}`);
    dispatch(removeProjectSuccess(id));
  } catch (error) {
    dispatch(removeProjectError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProjects,
  readyProject,
  cancelingProject,
  removeProject,
};
