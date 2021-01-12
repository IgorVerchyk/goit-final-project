import axios from 'axios';

import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  // removeTaskRequest,
  // removeTaskSuccess,
  // removeTaskError,
} from './tasksActions';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects';

const addTask = ({ sprintId, title, time }) => async dispatch => {
  dispatch(addTaskRequest());
  console.log('addTask -operation', sprintId, title, time);
  try {
    const { data } = await axios.post(`${baseURL}/tasks/${sprintId}`, {
      descr: title,
      planTime: time,
    });

    dispatch(addTaskSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(addTaskError(error));
  }
};

// const removeTask = id => async dispatch => {
//   console.log('remove operations');
//   dispatch(removeTaskRequest(id));

//   await axios
//     .delete(`${baseURL}/${id}`)
//     .then(() => dispatch(removeTaskSuccess(id)))
//     .catch(error => dispatch(removeTaskError(error.message)));
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addTask,
  // removeTask,
};
