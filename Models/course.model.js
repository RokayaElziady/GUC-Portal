var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema
var courses = new Schema({
 name:{type:String,unique: true,required:true},
department:String,
staffIds:[String]
})
var coursesmodel = mongoose.model('courses', courses);
module.exports = coursesmodel