const Joi = require("joi");
const { HttpCode } = require("../helpers/constants");

const validate = (schema, body, next) => {
  const { error } = schema.validate(body);
  if (error) {
    return next({
      status: HttpCode.BAD_REQUEST,
      message: "Missing required name field",
      data: "Bad Request",
    });
  }
  next();
};

module.exports.validateContact = (req, res, next) => {
  return validate(schemaCreateContact, req.body, next);
};

module.exports.validateUpdateContact = (req, res, next) => {
  return validate(schemaUpdateContact, req.body, next);
};
