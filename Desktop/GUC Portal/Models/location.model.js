var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

var Schema = mongoose.Schema

var locations = new Schema({
 name:{type:String,unique: true,required:true},
<<<<<<< HEAD
 type: {type:String,enum:['tutorial room','lecture halls','offices']},
=======
type: {type:String,enum:['tutorial room','lecture halls','offices']},
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
 capacity: {type: Number},
 officeOccupants:{type:Number,default:0}
})

var locationModel = mongoose.model('locations', locations)
module.exports = locationModel