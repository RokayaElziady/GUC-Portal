var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
const slotsModel=require('./slots.model');
const replacementModel=require('./replacements.model');

var Schema = mongoose.Schema

var schedule = new Schema({
  member_email: { type: String },
  slots: [slotsModel.schema],
  replacements:[replacementModel.schema],

})

var scheduleModel = mongoose.model('schedule', schedule)

module.exports = scheduleModel