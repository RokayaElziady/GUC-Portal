<<<<<<< HEAD
var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

=======


var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
var AutoIncrement = require('mongoose-sequence')(mongoose);
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
var Schema = mongoose.Schema

var hr = new Schema({
    id:{type:String,unique: true,required:true},
    name:{type:String,required:true},
    email:{type:String,unique: true,required:true},
    salary:{type:Number},
    officeLocation:{type:String},
    extraInformation:{type:String},
<<<<<<< HEAD
    password:{type:String,default:"1234"},
=======
    //changed
    password:{type:String,default:"123456"},
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
    dayOff:{type:String,default:"Saturday"},
  
})

var hrmodel = mongoose.model('hr', hr);
module.exports = hrmodel;