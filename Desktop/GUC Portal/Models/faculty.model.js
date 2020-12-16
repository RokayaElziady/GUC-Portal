var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
var Schema = mongoose.Schema
var faculty = new Schema({
<<<<<<< HEAD
 name:{type:String,unique: true,required:true},

=======
 name:{type:String,unique: true,required:true}
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
})
var fucaltyModel = mongoose.model('faculty', faculty);
module.exports = fucaltyModel