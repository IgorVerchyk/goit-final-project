import axios from 'axios';

import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
} from './tasksActions';

const baseURL = 'http://localhost:3456';

const fetchTasks = () => async dispatch => {
  dispatch(fetchTasksRequest());

  try {
    const { data } = await axios.get(`${baseURL}/tasks`);
    dispatch(fetchTasksSuccess(data));
  } catch (error) {
    dispatch(fetchTasksError(error.message));
  }
};

export default {
  fetchTasks,
};
