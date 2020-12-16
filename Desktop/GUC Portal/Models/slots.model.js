var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
const { slotOrder } = require('../api/enums')

var Schema = mongoose.Schema

var slots = new Schema({
  startTime: { type: Number },
  endTime: { type: Number },
  day:{type:String},
  course:{type:String },
  location:{type:String},
  order:{type: String,
<<<<<<< HEAD
         enum: [slotOrder.FIRST,
                slotOrder.SECOND,
                slotOrder.THIRD,
                slotOrder.FOURTH,
                slotOrder.FIFTH]},
                
  academicMember:{type:String,
                  default: 'undefined'}         
=======
    enum: [slotOrder.FIRST,
           slotOrder.SECOND,
           slotOrder.THIRD,
           slotOrder.FOURTH,
           slotOrder.FIFTH]},
  academicMember:{type:String}         
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b

})

var slotsModel = mongoose.model('slots', slots)

module.exports = slotsModel