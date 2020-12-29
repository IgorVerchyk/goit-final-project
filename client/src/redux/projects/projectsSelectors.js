const getLoading = state => state.projects.loading;

const getAllProjects = state => state.projects.items;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getAllProjects,
};
