var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema

var notification = new Schema({
<<<<<<< HEAD
  academicMember:{type:String},
=======
  member_email:{type:String},
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
  request:{type:String},
})

var notificationModel = mongoose.model('notification', notification)

module.exports = notificationModel