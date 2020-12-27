import axios from 'axios';

import {
  // addProjectRequest,
  // addProjectSuccess,
  // addProjectError,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
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

export default {
  fetchProjects,
};
