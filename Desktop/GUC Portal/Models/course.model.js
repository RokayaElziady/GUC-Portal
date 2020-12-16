var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);


var Schema = mongoose.Schema

var course = new Schema({
  name:{type:String,unique: true,required:true},
  //faculty:[{type:String}],
  department:[{type:String}],
  staffIds:[{type:String}] ,
  coordinator:{type:String},
  

})

var courseModel = mongoose.model('course', course);


module.exports = courseModel