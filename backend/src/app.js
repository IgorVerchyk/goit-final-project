const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app = express();
const { ErrorHandler } = require("./helpers/errorHandler");
const { HttpCode } = require("./helpers/constants");
const projectsRouter = require("./api/projects/projectsRoutes");

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({ origin: `http://localhost:${PORT}` }));
app.use(express.json());

app.use("/projects", projectsRouter);

app.use((req, res, next) => {
  res.status(HttpCode.NOT_FOUND).json({
    status: "error",
    code: HttpCode.NOT_FOUND,
    message: `Use api on routes ${req.baseUrl}/api/`,
    data: "Not Found",
  });
});

app.use((err, req, res, next) => {
  err.status = err.status ? err.status : HttpCode.INTERNAL_SERVER_ERROR;
  res.status(err.status).json({
    status: err.status === 500 ? "fail" : "error",
    code: err.status,
    message: err.message,
    data: err.status === 500 ? "Internal Server Error" : err.data,
  });
});

module.exports = app;
