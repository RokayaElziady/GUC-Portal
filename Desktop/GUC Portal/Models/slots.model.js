var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema

var slots = new Schema({
  startTime: { type: Number },
  endTime: { type: Number },
  course:{type:String },
  location:{type:String},

})

var slotsmodel = mongoose.model('slots', slots)

module.exports = slotsmodel