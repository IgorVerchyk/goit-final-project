import axios from 'axios';

import projectsActions from './projectsActions';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects';
// const baseURL = 'http://localhost:3456/api/projects';

const addProject = ({ title, descr, color }) => async dispatch => {
  dispatch(projectsActions.addProjectRequest());
  try {
    const { data } = await axios.post(`${baseURL}/`, {
      title,
      descr,
      color,
    });

    dispatch(projectsActions.addProjectSuccess(data));
  } catch (error) {
    dispatch(projectsActions.addProjectError(error));
  }
};

const removeDocument = (route, id) => async dispatch => {
  dispatch(projectsActions.removeDocumentRequest());
  try {
    const { data } = await axios.delete(`${baseURL}${route}${id}`);
    dispatch(projectsActions.removeDocumentSuccess(data));
  } catch (error) {
    dispatch(projectsActions.removeDocumentError(error.message));
  }
};

const addDocument = ({ id, route, body }) => async dispatch => {
  console.log(body);
  dispatch(projectsActions.addDocumentRequest);
  try {
    const { data } = await axios.post(`${baseURL}${route}${id}`, {
      body,
    });

    dispatch(projectsActions.addDocumentSuccess(data));
  } catch (error) {
    dispatch(projectsActions.addDocumentError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addProject,
  addDocument,
  removeDocument,
};
