var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema

var notification = new Schema({
  academicMember:{type:String},
  request:{type:String},
  message:{type:String},
  dateRecieved:{type:Date,
    default: Date.now},
})

var notificationModel = mongoose.model('notification', notification)

module.exports = notificationModel