
const express = require('express')
const attendanceRouter = express.Router()
const attendanceModel = require('../../Models/attendence.model');
const academicMemberModel=require('../../Models/academicMember.model');
const hrModel=require('../../Models/hr.model');
const hrmodel = require('../../Models/hr.model');
attendanceRouter.route('/:id')
.post(
  async (req, res) => {
try{  if(req.body.signIn||req.body.signOut){
        if(req.body.signIn){
          var date=new Date(req.body.signIn);
        
date.setTime( date.getTime() - date.getTimezoneOffset()*60*1000 );
const result=await attendanceModel.updateOne({staffId:req.params.id},{$push:{signIn: date}});
const result2=await attendanceModel.findOne({staffId:req.params.id})
result2.signIn.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
const result3=await attendanceModel.updateOne({staffId:req.params.id},{signIn: result2.signIn });

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
 

}
res.status(200).json({
  message: 'success',
});}
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
      const date=new Date(Date.now()) ;  
   
      var startDate=new Date();
      var endDate=new Date();
    if(date.getDate()<11){
      endDate=date;
      if(date.getMonth()==0){
        startDate.setFullYear(date.getFullYear()-1);
      startDate.setMonth(11);}
      else{
        startDate.setMonth(date.getMonth()-1);
        startDate.setFullYear(date.getFullYear());
      }
      startDate.setDate(11);
      startDate.setHours(7);
      startDate.setMinutes(0);
      startDate.setMilliseconds(0);
    }
    else{

      endDate=date; 
      startDate=new Date();
      startDate.setDate(11);
      startDate.setHours(7);
      startDate.setMonth(endDate.getMonth());
      startDate.setFullYear(endDate.getFullYear());
      startDate.setMinutes(0);
      startDate.setMilliseconds(0);
    }
    
  let absence=[];
    let missingDays=0;
    const result=await attendanceModel.find({});
    hrPeople=await hrmodel.find({});
    acPeople=await academicMemberModel.find({});

for(var i=startDate;i.getDate()<=endDate.getDate()&&i.getMonth()<=endDate.getMonth();i.setDate(i.getDate()+1)){
  if(!(i.getDay()=="5")){
 for(var j=0; j<result.length;j++){
  let person;
  if(result[j].staffId.includes("hr-")){
  person=hrPeople.filter(element=>element.id==result[j].staffId);}
  else{
    person=acPeople.filter(element=>element.id==result[j].staffId);
  }
  let dayoff;
if(person.length>0){
   dayoff=getDay(person[0].dayOff);}
 dayOff="blabla"
  if(!(i.getDay()==dayoff)){
   if(!absence.includes(result[j].staffId)){
  let temp=[];
  let temp2=[];
 for(var k=0;k<result[j].signIn.length;k++){
   elementTime=new Date(result[j].signIn[k]);
    elementTime.setTime( elementTime.getTime() +elementTime.getTimezoneOffset()*60*1000 );  

  if( elementTime.getMonth()==i.getMonth() && 
    elementTime.getFullYear()==i.getFullYear()&&
    elementTime.getDate()==i.getDate()&&
    elementTime.getHours()>=7&&
    elementTime.getHours()<=19 ){ 
temp.push(result[j].signIn[k]);}
     }
     for(var k=0;k<result[j].signOut.length;k++){
      elementTime=new Date(result[j].signOut[k]);
      let timeExist=false;
for(let l=0;l<temp.length;l++){
  if(((new Date(temp[l])).getTime()) < elementTime.getTime()){
timeExist=true;
}}
       elementTime.setTime( elementTime.getTime() +elementTime.getTimezoneOffset()*60*1000 );  
     if( elementTime.getMonth()==i.getMonth() && 
       elementTime.getFullYear()==i.getFullYear()&&
       elementTime.getDate()==i.getDate()&&
       elementTime.getHours()>=7&&
       elementTime.getHours()<=19 && timeExist){ 
   temp2.push(result[j].signIn[k]);}
        }

if(!temp||!temp2||temp.length==0||temp2.length==0){
  absence.push(result[j].staffId);
 }
     temp=[];
     temp2=[];}}}}}


   res.send(absence);}

          catch(err){
            console.log(err);
            res.status(500).json({
              error: err
            });
        }
      }
      );
      function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }  
    function getDay(day) {
    if(day=="Sunday")
    return "0";
    if(day=="Monday")
    return "1";
    if(day=="Tuesday")
    return "2";
    if(day=="Wednesday")
    return "3";
    if(day== "Thursday")
    return "4";
    if(day== "Saturday")
    return "6";
    }
module.exports = attendanceRouter;
