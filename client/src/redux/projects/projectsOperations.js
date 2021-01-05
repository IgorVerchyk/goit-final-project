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

const addProject = ({ projectName, descr, color }) => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post(`${baseURL}/projects`, {
      projectName,
      descr,
      color,
    });
    dispatch(addProjectSuccess(data));
  } catch (error) {
    dispatch(addProjectError(error));
  }
};

const removeProject = id => async dispatch => {
  console.log('remove operations');
  dispatch(removeProjectRequest());

  await axios
    .delete(`${baseURL}/projects/${id}`)
    .then(() => dispatch(removeProjectSuccess(id)))
    .catch(error => dispatch(removeProjectError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProjects,
  addProject,
  removeProject,
};
