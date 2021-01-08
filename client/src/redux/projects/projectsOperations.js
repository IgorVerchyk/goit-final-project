import axios from 'axios';

import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  removeProjectRequest,
  removeProjectSuccess,
  removeProjectError,
} from './projectsActions';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects/';
// const baseURL = 'http://localhost:3456/api/projects';

const fetchProjects = id => async dispatch => {
  dispatch(fetchProjectsRequest());

  try {
    const { data } = await axios.get(`${baseURL}/:${id}`);
    dispatch(fetchProjectsSuccess(data));
  } catch (error) {
    dispatch(fetchProjectsError(error.message));
  }
};

const addProject = ({ projectName, descr, color }) => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post(`${baseURL}/`, {
      title: projectName,
      descr,
      color,
    });

    const { projects } = data;

    dispatch(addProjectSuccess(projects));
  } catch (error) {
    dispatch(addProjectError(error));
  }
};

const removeProject = id => async dispatch => {
  console.log('remove operations');
  dispatch(removeProjectRequest());

  try {
    const { data } = await axios.delete(`${baseURL}/${id}`);

    const { projects } = data;

    dispatch(removeProjectSuccess(projects));
  } catch (e) {
    dispatch(removeProjectError(e));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProjects,
  addProject,
  removeProject,
};
