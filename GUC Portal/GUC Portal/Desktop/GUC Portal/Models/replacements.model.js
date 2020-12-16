var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);


var Schema = mongoose.Schema

var replacement = new Schema({
  member_email:{type:String},
  slot:{type:String},
})

var replacementModel = mongoose.model('replacement', replacement)

module.exports = replacementModel