var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema
var faculties = new Schema({
 name:{type:String,unique: true,required:true},
})
var fucaltiesmodel = mongoose.model('faculties', faculties);
module.exports = fucaltiesmodel