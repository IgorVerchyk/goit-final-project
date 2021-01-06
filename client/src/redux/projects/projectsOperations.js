import axios from 'axios';

import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
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

// const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects/';
const baseURL = 'http://localhost:3456';

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
    const { data } = await axios.post(`${baseURL}`, {
      projectName,
      descr,
      color,
    });
    dispatch(addProjectSuccess(data));
  } catch (error) {
    dispatch(addProjectError(error));
  }
};

const cancelingProject = () => async dispatch => {
  console.log();
  dispatch(cancelingProjectRequest());

  try {
    await axios.get(`${baseURL}`);
    dispatch(cancelingProjectSuccess());
  } catch (error) {
    dispatch(cancelingProjectError(error.message));
  }
};

const removeProject = id => async dispatch => {
  console.log('remove operations');
  dispatch(removeProjectRequest());

  await axios
    .delete(`${baseURL}/${id}`)
    .then(() => dispatch(removeProjectSuccess(id)))
    .catch(error => dispatch(removeProjectError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProjects,
  addProject,
  cancelingProject,
  removeProject,
};
