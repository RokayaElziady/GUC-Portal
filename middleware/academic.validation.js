const Joi = require('joi');
const validatePostacademic = (req, res, next) => {
    const schema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required().email(),
    salary:Joi.number(),
    officeLocation:Joi.string(),
    extraInformation:Joi.string(),
    gender:Joi.string().required().valid('female','male'),
<<<<<<< HEAD
    role:Joi.string().required(),
=======
    role:Joi.string().required().valid('coordinator','HOD','DOC','TA'),
>>>>>>> 1367d048f177a914fee80dfc1ec801c8a66d9992
    dayOff:Joi.string().valid('Saturday','Sunday','Monday','Tuesday','Wednesday' ,'Thursday','Friday'),
    department:Joi.string().required()  
    })
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }
  const validatePutacademic = (req, res, next) => {
    const schema = Joi.object({
    name:Joi.string(),
    email:Joi.string().email(),
    salary:Joi.number(),
    officeLocation:Joi.string(),
    extraInformation:Joi.string(),
<<<<<<< HEAD
    gender:Joi.string(),
    role:Joi.string(),
=======
    gender:Joi.string().valid('female','male'),
    role:Joi.string().valid('coordinator','HOD','DOC','TA'),
>>>>>>> 1367d048f177a914fee80dfc1ec801c8a66d9992
    dayOff:Joi.string().valid('Saturday','Sunday','Monday','Tuesday','Wednesday' ,'Thursday','Friday'),
   
    })
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }
  const validatePutSalaryacademic = (req, res, next) => {
    const schema = Joi.object({
    salary:Joi.number(),
      
    })
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }
  
  module.exports = {
    validatePostacademic,
    validatePutacademic,
    validatePutSalaryacademic
   }