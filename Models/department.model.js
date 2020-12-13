const courseModel = require('./course.model')
const staff = require('./staff.model')
var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema

var departments = new Schema({
 name:{type:String,unique: true,required:true},
courses: [courseModel],
staff:[staff]
})

var departmentsmodel = mongoose.model('departments', departments);
module.exports = departmentsmodel