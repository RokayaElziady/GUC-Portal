var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
const slotsModel=require('./slots.model');

var Schema = mongoose.Schema

var schedule = new Schema({
  username: { type: String },
  slots: [slotsModel.schema],

})

var schedulemodel = mongoose.model('schedule', schedule)

module.exports = schedulemodel