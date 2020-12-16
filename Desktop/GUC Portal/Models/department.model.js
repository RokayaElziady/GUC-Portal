var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);


var Schema = mongoose.Schema

var departement = new Schema({
  HOD:{type:String},
  name:{type:String,unique: true,required:true},
  faculty: {type:String},
<<<<<<< HEAD
  staffIds:[{type:String}],
  courses:[{type:String}]
  

=======
  courseNames:[{type:String}],
  staffIds:[{type:String}]
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
})

var departementModel = mongoose.model('department', departement)

module.exports = departementModel