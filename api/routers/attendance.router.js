
const express = require('express')
const attendanceRouter = express.Router()
const attendanceModel = require('../../Models/attendence.model');
const academicMemberModel=require('../../Models/academicMember.model');
const hrModel=require('../../Models/hr.model');
attendanceRouter.route('/:id')
.post(
  async (req, res) => {
try{  if(req.body.signIn||req.body.signOut){
        if(req.body.signIn){
const result=await attendanceModel.updateOne({staffId:req.params.id},{$push:{signIn: req.body.signIn}});
const result2=await attendanceModel.findOne({staffId:req.params.id})
result2.signIn.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
const result3=await attendanceModel.updateOne({staffId:req.params.id},{signIn: result2.signIn });

res.status(200).json({
    message: 'success',
});
}
if(req.body.signOut){
var date=new Date(req.body.signOut);
date.setTime( date.getTime() - date.getTimezoneOffset()*60*1000 );
  const result=await attendanceModel.updateOne({staffId:req.params.id},{$push:{signOut: date,}});
  const result2=await attendanceModel.findOne({staffId:req.params.id})
  result2.signOut.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  const result3=await attendanceModel.updateOne({staffId:req.params.id},{signOut: result2.signOut });
 
  res.status(200).json({
      message: 'success',
  });
}}
  else{  res.send({
        message: 'nothing or wrong request',
    });}}
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }
    }
    )
    .get(
        async (req, res) => {
      try{ 
       const result=await attendanceModel.findOne({staffId:req.params.id});
       res.send(result);}

              catch(err){
                console.log(err);
                res.status(500).json({
                  error: err
                });
            }
          }
          );
attendanceRouter.route('/')
.get(
    async (req, res) => {
  try{ 
      const date=new Date(Date.now())    
      console.log(date.getDate())
   const result=await attendanceModel.find({});
   res.send(result);}

          catch(err){
            console.log(err);
            res.status(500).json({
              error: err
            });
        }
      }
      );

// //gets dates up to a specificc day iin a month
//       function getDates(startDate, stopDate) {
//         var dateArray = new Array();
//         var currentDate = startDate;
//         while (currentDate <= stopDate) {
//             if(currentDate.getDay()!=5)
//             dateArray.push(new Date (currentDate));
//             currentDate = currentDate.addDays(1);
//         }
//         return dateArray;
//     }
module.exports = attendanceRouter;
