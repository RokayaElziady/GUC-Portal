var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
<<<<<<< HEAD
mongoose.set('returnOriginal', false);
mongoose.set('useFindAndModify', false);
=======
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
const { requestStatus,requestType } = require('../api/enums')


var Schema = mongoose.Schema

var requests = new Schema({
  from:{type:String},
  to:{type:String},
  type:{type:String,
         enum: [requestType.SLOT_LINKING,
          requestType.REPLACEMENT,
          requestType.CHANGE_DAY_OFF,
          requestType.ANNUAL_LEAVE,
          requestType.ACCIDENTAL_LEAVE,
          requestType.SICK_LEAVE,
          requestType.MATERNITY_LEAVE,
          requestType.COMPENSATION_LEAVE,
          requestType.LEAVE] },
  reason:{type:String},
  status:{type: String,
  enum: [requestStatus.ACCEPTED,
    requestStatus.REJECTED,
    requestStatus.PENDING]},
  course:{type:String},
  slot:{type:String},
  dayOff:{type:String},
  dateSubmitted:{type:Date,
<<<<<<< HEAD
                 default: new Date().toISOString()},
  dateOfRequest:{type:Date},
  replacementMember:{type:String,
                     default: 'undefined'} ,
                     
=======
                 default: Date.now},
  dateOfRequest:{type:Date},
  replacementMember:{type:String,
                     default: 'undefined'} ,
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b


})

var requestsModel = mongoose.model('requests', requests)

module.exports = requestsModel