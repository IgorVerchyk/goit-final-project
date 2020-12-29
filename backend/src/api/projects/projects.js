const projectsRouter = express.Router();

projectsRouter.post("/", ProjectController.createProject);

projectsRouter.delete("/:projectId", ProjectController.removeProject);

module.exports = projectsRouter;
