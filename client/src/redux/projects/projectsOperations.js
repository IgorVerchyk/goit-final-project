import axios from 'axios';

import projectsActions from './projectsActions';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects';
//const baseURL = 'http://localhost:3001/api/projects';

const addProject = ({ title, descr }, color) => async dispatch => {
  // console.log(color);
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
  dispatch(projectsActions.addDocumentRequest);
  try {
    const { data } = await axios.post(`${baseURL}${route}${id}`, body);

    dispatch(projectsActions.addDocumentSuccess(data));
  } catch (error) {
    dispatch(projectsActions.addDocumentError(error));
  }
};
const updateDocument = ({ id, route, body }) => async dispatch => {
  console.log(id);
  console.log(body);
  dispatch(projectsActions.updateDocumentRequest);
  try {
    const { data } = await axios.patch(`${baseURL}${route}${id}`, body);

    dispatch(projectsActions.updateDocumentSuccess(data));
  } catch (error) {
    dispatch(projectsActions.updateDocumentError(error));
  }
};

const addColaborators = ({ projectId, email }) => async dispatch => {
  console.log({ email });
  dispatch(projectsActions.addColaboratorsRequest());
  try {
    const { data } = await axios.patch(`${baseURL}/${projectId}`, {
      email,
    });

    dispatch(projectsActions.addColaboratorsSuccess(data));
  } catch (error) {
    dispatch(projectsActions.addColaboratorsError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addProject,
  addDocument,
  addColaborators,
  removeDocument,
  updateDocument,
};
