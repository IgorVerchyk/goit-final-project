const getLoading = state => state.tasks.loading;

const getAllTasks = state => state.tasks.items;

export default {
  getLoading,
  getAllTasks,
};
