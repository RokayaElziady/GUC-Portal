var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);


var Schema = mongoose.Schema

var course = new Schema({
  name:{type:String,unique: true,required:true},
  department:[{type:String}],
  coordinator:{type:String},
  

})

<<<<<<< HEAD
var courseModel = mongoose.model('course', course);

=======
var courseModel = mongoose.model('course', course)
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b

module.exports = courseModel