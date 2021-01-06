const ProjectService = require("../services/project");
const UsersService = require("../services/user");
const { HttpCode } = require("../helpers/constants");

const userServise = new UsersService();
const projectService = new ProjectService();

const createProject = async (req, res, next) => {
  const { body, user } = req;

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
    const result = await projectService.getProject(id);
    console.log(result);
    if (!result) {
      return res.status(404).send({ message: "No project with such ID" });
    }
    return res.status(HttpCode.OK).json(result);
  } catch (e) {
    next(e);
  }
};

const createSprint = async (req, res, next) => {
  const id = req.params.projectId;
  console.log(id);
  const body = req.body;
  try {
    const project = await projectService.getProject(id);

    if (!project) {
      res.status(404).send({ message: "No project with such ID" });
    }

    const result = await projectService.createNewSprint(id, body);

    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const removeSprint = async (req, res, next) => {
  try {
    const sprintId = req.params.sprintId;
    const result = await projectService.removeSprint(req.params);
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Project ${sprintId} not found ` });
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

const createTask = async (req, res, next) => {
  const id = req.params.projectId;
  const sprintId = req.params.sprintId;
  console.log(id, sprintId);
  const body = req.body;
  try {
    const project = await projectService.getProject(id);

    if (!project) {
      res.status(404).send({ message: "No project with such ID" });
    }

    const result = await projectService.createNewTask(id, sprintId, body);

    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const updateTaskTime = async (req, res, next) => {
  const id = req.params.projectId;
  const sprintId = req.params.sprintId;
  const taskId = req.params.taskId;

  console.log(id, sprintId, taskId);
  const body = req.body;
  try {
    const project = await projectService.getProject(id);
    if (!project) {
      res.status(404).send({ message: "No project with such ID" });
    }

    const sprint = await projectService.getSprint(sprintId);
    if (!sprint) {
      res.status(404).send({ message: "No sprint with such ID" });
    }

    const result = await projectService.updateTaskTime(
      id,
      sprintId,
      taskId,
      body
    );

    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const removeTask = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    console.log(taskId);
    const result = await projectService.removeTask(req.params);
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Project ${taskId} not found ` });
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
