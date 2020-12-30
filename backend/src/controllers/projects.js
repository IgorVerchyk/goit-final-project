const { query } = require("express");
const service = require("../services/project");

class ProjectController {
  static async createProject(req, res, next) {
    try {
      const result = await service.createProject(req.body);
      res.status(201).json(result);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  static async removeProject({ query, params: { projectId } }, res, next) {
    if (query.sprintId) return next();
    try {
      const result = await service.removeProject(projectId);
      return result
        ? res.status(200).json(result)
        : res.status(404).json({ message: `Project ${projectId} not found ` });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  static async createSprint({ body, params: { projectId } }, res, next) {
    try {
      const result = await service.getProject(projectId);

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
  }

  static async deleteSprint({
    query: { sprintId },
    params: { projectId },
    res,
    next,
  }) {
    try {
      if (!sprintId) {
        return res.status(404).send({ message: "No spint ID declared" });
      }

      const result = await service.getProject(projectId);

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
  }
}

module.exports = ProjectController;
