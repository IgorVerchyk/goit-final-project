import axios from 'axios';

import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  // fetchProjectsRequest,
  fetchProjectsSuccess,
  // fetchProjectsError,
  cancelingProjectRequest,
  cancelingProjectSuccess,
  cancelingProjectError,
  removeProjectRequest,
  removeProjectSuccess,
  removeProjectError,
} from './projectsActions';

const baseURL = 'http://localhost:3456/api';

// const fetchProjects = () => async (dispatch, getState) => {
//   dispatch(fetchProjectsRequest());

//   const {
//     auth: {
//       currentUser: { id },
//     },
//   } = getState();
//   try {
//     const { data } = await axios.get(`${baseURL}/projects/${id}`);
//     dispatch(fetchProjectsSuccess(data));
//   } catch (error) {
//     dispatch(fetchProjectsError(error.message));
//   }
// };

const fetchProjects = () => async (dispatch, getState) => {
  const {
    auth: {
      currentUser: { projects },
    },
  } = getState();
  dispatch(fetchProjectsSuccess(projects));
};

const addProject = ({ projectName: title, descr, color }) => async (
  dispatch,
  getState,
) => {
  dispatch(addProjectRequest());

  const {
    auth: {
      currentUser: { id },
    },
  } = getState();

  try {
    const { data } = await axios.post(`${baseURL}/projects`, {
      id,
      title,
      descr,
      color,
    });

    console.log(data);
    dispatch(addProjectSuccess(data));
  } catch (error) {
    dispatch(addProjectError(error));
  }
};

const cancelingProject = () => async dispatch => {
  console.log();
  dispatch(cancelingProjectRequest());

  try {
    await axios.get(`${baseURL}/projects`);
    dispatch(cancelingProjectSuccess());
  } catch (error) {
    dispatch(cancelingProjectError(error.message));
  }
};

const removeProject = id => async (dispatch, getState) => {
  console.log('remove operations');
  dispatch(removeProjectRequest());

  const {
    auth: {
      currentUser: { id: userId },
    },
  } = getState();

  await axios
    .delete(`${baseURL}/projects/${id}`, { data: { id: userId } })
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
