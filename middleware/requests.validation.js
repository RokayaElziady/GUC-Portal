const Joi = require('joi')
const {days,slotOrder}=require('../api/enums')

const validateSendReplacementRequest = (req, res, next) => {
  const schema = Joi.object({
    to: Joi.string().required(),
    slot:Joi.string().length(24).required(),
    reason:Joi.string()
  })

  const isValid = Joi.validate(req.body, schema)
  if (isValid.error) {
    return res.json({
      error: isValid.error.details[0].message,
    })
  }
  return next()
}



const validateSendSlotLinkingRequest = (req, res, next) => {
    const schema = Joi.object({
      slot:Joi.string().length(24).required(),
      reason:Joi.string()
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateSendChangeDayOffRequest = (req, res, next) => {
    const schema = Joi.object({
      day:Joi.string().valid(days.SUNDAY,days.MONDAY,days.TUESDAY,days.WEDNESDAY,days.THURSDAY,days.FRIDAY,days.SAUTURDAY).required(),
      reason:Joi.string()
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateSendAnnualLeaveRequest = (req, res, next) => {
    const schema = Joi.object({
      date:Joi.date().iso().required(),
      reason:Joi.string(),
      replacements:Joi.array().items(Joi.string()),
      requests:Joi.array().items(Joi.string()),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateSendAccidentalLeaveRequest = (req, res, next) => {
    const schema = Joi.object({
        date:Joi.date().iso().required(),
      reason:Joi.string()
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateSendSickLeaveRequest = (req, res, next) => {
    const schema = Joi.object({
      date:Joi.date().iso().required(),
      reason:Joi.string(),
      documents:Joi.string().required(),

    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }

  const validateSendMaternityLeaveRequest = (req, res, next) => {
    const schema = Joi.object({
      date:Joi.date().iso().required(),
      reason:Joi.string(),
      documents:Joi.string().required(),

    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }

  const validateSendCompensationLeaveRequest = (req, res, next) => {
    const schema = Joi.object({
      date:Joi.date().iso().required(),
      reason:Joi.string().required(),
      compensationDay:Joi.date().iso().required(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }

  const validateCancelRequest = (req, res, next) => {
    const schema = Joi.object({
        request:Joi.string().length(24).required(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateRejectReplacementRequest = (req, res, next) => {
    const schema = Joi.object({
        request:Joi.string().length(24).required(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }

  const validateAcceptReplacementRequest = (req, res, next) => {
    const schema = Joi.object({
        request:Joi.string().length(24).required(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateAddSlot = (req, res, next) => {
    const schema = Joi.object({
        startTime:Joi.number().required(),
        endTime:Joi.number().required(),
        day:Joi.string().valid(days.SUNDAY,days.MONDAY,days.TUESDAY,days.WEDNESDAY,days.THURSDAY,days.FRIDAY,days.SAUTURDAY).required(),
        location:Joi.string().required(),
        order:Joi.string().valid(slotOrder.FIRST,slotOrder.SECOND,slotOrder.THIRD,slotOrder.FOURTH,slotOrder.FIFTH).required(),
        course:Joi.string().required(),
        academicMember:Joi.string(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateUpdateSlot = (req, res, next) => {
    const schema = Joi.object({
        startTime:Joi.number(),
        endTime:Joi.number(),
        day:Joi.string().valid(days.SUNDAY,days.MONDAY,days.TUESDAY,days.WEDNESDAY,days.THURSDAY,days.FRIDAY,days.SAUTURDAY),
        location:Joi.string(),
        order:Joi.string().valid(slotOrder.FIRST,slotOrder.SECOND,slotOrder.THIRD,slotOrder.FOURTH,slotOrder.FIFTH),
        academicMember:Joi.string(),
        slot:Joi.string().length(24).required()
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateDeleteSlot = (req, res, next) => {
    const schema = Joi.object({
      slot:Joi.string().length(24).required(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateAcceptSlotLinkingRequest = (req, res, next) => {
    const schema = Joi.object({
      request:Joi.string().length(24).required(),
    })
  
    const isValid = Joi.validate(req.body, schema)
    if (isValid.error) {
      return res.json({
        error: isValid.error.details[0].message,
      })
    }
    return next()
  }


  const validateRejectSlotLinkingRequest = (req, res, next) => {
    const schema = Joi.object({
      request:Joi.string().length(24).required(),
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
 validateSendReplacementRequest,
 validateSendSlotLinkingRequest,
 validateSendChangeDayOffRequest,
 validateSendAnnualLeaveRequest,
 validateSendAccidentalLeaveRequest,
 validateSendSickLeaveRequest,
 validateSendMaternityLeaveRequest,
 validateSendCompensationLeaveRequest,
 validateCancelRequest,
 validateRejectReplacementRequest,
 validateAcceptReplacementRequest,
 validateAddSlot,
 validateUpdateSlot,
 validateDeleteSlot,
 validateAcceptSlotLinkingRequest,
 validateRejectSlotLinkingRequest



}
