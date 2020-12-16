var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema

var hr = new Schema({
    id:{type:String,unique: true,required:true},
    name:{type:String,required:true},
    email:{type:String,unique: true,required:true},
    salary:{type:Number},
    officeLocation:{type:String},
    extraInformation:{type:String},
    password:{type:String,default:"1234"},
    dayOff:{type:String,default:"Saturday"},
  
})

var hrmodel = mongoose.model('hr', hr);
module.exports = hrmodel;