const joi = require('@hapi/joi')

const validateLogin = data => {
  const schema = joi.object({
    email: joi.string().required().min(12).max(100),
    password: joi.string().required().min(6).max(20),
  });

  return schema.validate(data)
};

const validateRegister = data => {
  const schema = joi.object({
    name: joi.string().required().min(3).max(50),
    email: joi.string().required().min(12).max(100),
    password: joi.string().required().min(6).max(20),
  });

  return schema.validate(data)
};

module.exports = { validateLogin, validateRegister };