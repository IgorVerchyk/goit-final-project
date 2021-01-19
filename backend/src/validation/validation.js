const Joi = require('joi');
const { HttpCode } = require('../helpers/constants');

const schemaAuth = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().required(),
});

const schemaCreateProject = Joi.object({
  title: Joi.string()
    .regex(/^[a-zA-Z0-9, ]*$/, 'Alphanumerics, space and comma characters')
    .min(3)
    .max(20)
    .required(),
  descr: Joi.string()
    .regex(/^[a-zA-Z0-9, ]*$/, 'Alphanumerics, space and comma characters')
    .min(3)
    .max(35)
    .required(),
  color: Joi.string().required(),
  colaborators: Joi.array().optional(),
  sprints: Joi.array().optional(),
  owner: Joi.object().optional(),
});

const schemaCreateSprint = Joi.object({
  title: Joi.string()
    .regex(/^[a-zA-Z0-9, ]*$/, 'Alphanumerics, space and comma characters')
    .min(3)
    .max(35)
    .required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().optional(),
  tasks: Joi.array().optional(),
});

const schemaCreateTask = Joi.object({
  descr: Joi.string()
    .regex(/^[a-zA-Z0-9, ]*$/, 'Alphanumerics, space and comma characters')
    .min(3)
    .max(30)
    .required(),
  planTime: Joi.number().required(),
  spendTime: Joi.array().optional(),
  total: Joi.number().optional(),
});

const schemaUpdateTitle = Joi.object({
  title: Joi.string()
    .regex(/^[a-zA-Z0-9, ]*$/, 'Alphanumerics, space and comma characters')
    .min(3)
    .max(35)
    .required(),
});

const schemaUpdateColaborators = Joi.object({
  colaborators: Joi.array().optional(),
});

const schemaUpdateTaskTime = Joi.object({
  data: Joi.date().required(),
  time: Joi.number().required(),
});

const validate = (schema, body, next) => {
  const { error } = schema.validate(body);
  if (error) {
    return next({
      status: HttpCode.BAD_REQUEST,
      message: 'Missing required name field',
      data: 'Bad Request',
    });
  }
  next();
};

module.exports.validateAuth = (req, res, next) => {
  return validate(schemaAuth, req.body, next);
};

module.exports.validateCreateProject = (req, res, next) => {
  return validate(schemaCreateProject, req.body, next);
};

module.exports.validateCreateSprint = (req, res, next) => {
  return validate(schemaCreateSprint, req.body, next);
};
module.exports.validateCreateTask = (req, res, next) => {
  return validate(schemaCreateTask, req.body, next);
};
module.exports.validateProjectTiltle = (req, res, next) => {
  return validate(schemaUpdateTitle, req.body, next);
};
module.exports.validateSprintTitle = (req, res, next) => {
  return validate(schemaUpdateTitle, req.body, next);
};
module.exports.validateUpdateColaborators = (req, res, next) => {
  return validate(schemaUpdateColaborators, req.body, next);
};
module.exports.validateUpdateTaskTime = (req, res, next) => {
  return validate(schemaUpdateTaskTime, req.body, next);
};
