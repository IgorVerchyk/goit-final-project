import axios from 'axios';
// import { useSelector } from 'react-redux';

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

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects';
// const baseURL = 'http://localhost:3456/api/projects';

const fetchProjects = () => async dispatch => {
  dispatch(fetchProjectsRequest());

  try {
    const { data } = await axios.get(`${baseURL}/`);
    dispatch(fetchProjectsSuccess(data));
  } catch (error) {
    dispatch(fetchProjectsError(error.message));
  }
};

const addProject = ({ projectName, descr, color }) => async dispatch => {
  // const header = {
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //   },
  // };
  // console.log(header);
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post(`${baseURL}/`, {
      title: projectName,
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
  dispatch(removeProjectRequest(id));

  await axios
    .delete(`${baseURL}/${id}`)
    .then(() => dispatch(removeProjectSuccess(id)))
    .catch(error => dispatch(removeProjectError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProjects,
  addProject,
  removeProject,
};
