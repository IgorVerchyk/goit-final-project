const ProjectService = require("../services/project");
const UsersService = require("../services/user");
const { HttpCode } = require("../helpers/constants");

const userServise = new UsersService();
const projectService = new ProjectService();

const createProject = async (req, res, next) => {
  const { id, title } = req.body;
  const user = await userServise.findById(id);
  const project = await user.projects.find(
    (project) => project.title === title
  );
  if (project) {
    return next({
      status: HttpCode.CONFLICT,
      data: "Conflict",
      message: "Project with that title already exist",
    });
  }
  try {
    const result = await projectService.createProject(req.body);
    res.status(201).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getProject = async (req, res, next) => {
  try {
    const result = await projectService.getProject(req.id);
    if (!result) {
      return res.status(404).send({ message: "No project with such ID" });
    }
    return result;
  } catch (e) {
    next(e);
  }
};

const createSprint = async ({ body, params: { projectId } }, res, next) => {
  try {
    const result = await projectService.getProject(projectId);

    if (!result) {
      res.status(404).send({ message: "No project with such ID" });
    }

    result.sprints.push(body);

    await service.updateProject(projectId, result);

    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const deleteSprint = async ({
  query: { sprintId },
  params: { projectId },
  res,
  next,
}) => {
  try {
    if (!sprintId) {
      return res.status(404).send({ message: "No spint ID declared" });
    }

    const result = await projectService.getProject(projectId);

    if (!result) {
      return res.status(404).send({ message: "No project with such ID" });
    }

    const updatedSprints = result.sprints.filter(
      (sprint) => sprint._id.toString() !== sprintId
    );

    const isSprintDeleted = result.sprints.length !== updatedSprints.length;

    if (!isSprintDeleted)
      return res.status(404).send({ message: "No sprint with such ID" });

    result.sprints = updatedSprints;

    await service.updateProject(projectId, result);

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};
const removeProject = async (req, res, next) => {
  try {
    const result = await projectService.removeProject(req.params);
    return result
      ? res.status(200).json(result)
      : res.status(404).json({ message: `Project ${projectId} not found ` });
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
  deleteSprint,
};
