import axios from 'axios';

import projectsActions from './projectsActions';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/projects';
// const baseURL = 'http://localhost:3456/api/projects';

const fetchProjects = () => async dispatch => {
  dispatch(projectsActions.fetchProjectsRequest());

  try {
    const { data } = await axios.get(`${baseURL}/`);
    dispatch(projectsActions.fetchProjectsSuccess(data));
  } catch (error) {
    dispatch(projectsActions.fetchProjectsError(error.message));
  }
};

const addProject = ({ projectName, descr, color }) => async dispatch => {
  dispatch(projectsActions.addProjectRequest());
  try {
    const { data } = await axios.post(`${baseURL}/`, {
      title: projectName,
      descr,
      color,
    });

    dispatch(projectsActions.addProjectSuccess(data));
  } catch (error) {
    dispatch(projectsActions.addProjectError(error));
  }
};

const removeDocument = ({ route, id }) => async dispatch => {
  dispatch(projectsActions.removeProjectRequest(id));

  await axios
    .delete(`${baseURL}${route}${id}`)
    .then(() => dispatch(projectsActions.removeProjectSuccess(id)))
    .catch(error =>
      dispatch(projectsActions.removeProjectError(error.message)),
    );
};

const addSprint = ({
  projectId,
  sprintTitle,
  startDate,
  endDate,
}) => async dispatch => {
  dispatch(projectsActions.addProjectRequest());
  try {
    const { data } = await axios.post(`${baseURL}/Sprints/${projectId}`, {
      title: sprintTitle,
      startDate,
      endDate,
    });

    dispatch(projectsActions.addProjectSuccess(data));
  } catch (error) {
    dispatch(projectsActions.addProjectError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchProjects,
  addProject,
  removeProject,
  addSprint,
  removeSprint,
};
