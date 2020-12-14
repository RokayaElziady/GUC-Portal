var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema
var departments = new Schema({
 name:{type:String,unique: true,required:true},
faculty: {type:String},
})
var departmentsmodel = mongoose.model('departments', departments);
module.exports = departmentsmodel