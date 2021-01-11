const ProjectService = require("../services/project");
const UsersService = require("../services/user");
const { HttpCode } = require("../helpers/constants");

const userServise = new UsersService();
const projectService = new ProjectService();

const createProject = async (req, res, next) => {
  const { body, user } = req;
  const project = await projectService.getProjectByTitle(body.title);

  // const project = projectService.
  // const project = await user.projects.find(
  //   (project) => project.title === body.createNewSprinttitle
  // );
  // if (project) {
  //   return next({
  //     status: HttpCode.CONFLICT,
  //     data: "Conflict",
  //     message: "Project with that title already exist",
  //   });
  // }

  //TODO: добавить проверку имени проекта

  try {
    const result = await projectService.createProject(user, body);
    res.status(201).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getProject = async (req, res, next) => {
  try {
    const id = req.params.projectId;
    if (!id) {
      res
        .status(HttpCode.BAD_REQUEST)
        .send({ message: "Project's ID not defiened" });
    }
    const result = await projectService.getProjectById(id);

    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Project ${projectId} not found ` });
  } catch (e) {
    next(e);
  }
};

const removeProject = async (req, res, next) => {
  try {
    const { params, user } = req;
    const result = await projectService.removeProject(params, user);
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Project ${projectId} not found ` });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const createSprint = async (req, res, next) => {
  try {
    const {
      params: { projectId },
      body,
      user: { id: userId },
    } = req;

    const result = await projectService.createNewSprint(
      userId,
      projectId,
      body
    );

    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Project ${projectId} not found ` });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const removeSprint = async (req, res, next) => {
  try {
    const {
      params: { sprintId },
      user: { id: userId },
    } = req;

    const result = await projectService.removeSprint(userId, sprintId);

    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Sprint ${sprintId} not found ` });
  } catch (e) {
    next(e);
  }
};

const createTask = async (req, res, next) => {
  try {
    const {
      params: { sprintId },
      body,
      user: { id: userId },
    } = req;

    const result = await projectService.createNewTask(userId, sprintId, body);

    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Sprint ${sprintId} not found ` });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const updateTaskTime = async (req, res, next) => {
  try {
    const {
      params: { taskId },
      body,
      user: { id: userId },
    } = req;

    const result = await projectService.updateTaskTime(userId, taskId, body);

    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Task ${taskId} not found ` });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const removeTask = async (req, res, next) => {
  try {
    const {
      params: { taskId },
      user: { id: userId },
    } = req;

    const result = await projectService.removeTask(userId, taskId);

    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Task ${taskId} not found ` });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  getProject,
  createProject,
  removeProject,
  createSprint,
  removeSprint,
  createTask,
  removeTask,
  updateTaskTime,
};
