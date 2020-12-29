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

  static async removeProject({ params: { projectId } }, res, next) {
    try {
      const result = await service.removeProject(projectId);
      return result
        ? res.status(200).json(result)
        : res.status(404).json({ message: `Project ${contactId} not found ` });
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = ProjectController;
