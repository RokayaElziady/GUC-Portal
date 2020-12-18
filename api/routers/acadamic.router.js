const express = require('express')
const bcrypt=require(('bcrypt'));
const academicMemberRouter = express.Router()
const locationModel = require('../../Models/location.model');
const academicMember = require('../../Models/academicMember.model');
const counterModel = require('../../Models/counters.model');
const attendanceModel=require('../../Models/attendence.model');
const hrModel=require('../../Models/hr.model');
academicMemberRouter.route('/')
.post(
  async (req, res) => {
 const newacademicMember= new academicMember({
    name:req.body.name,
    email:req.body.email,
    salary:req.body.salary,
    officeLocation:req.body.officeLocation,
    extraInformation:req.body.extraInformation,
    gender:req.body.gender,
    role:req.body.role,
    acadamic:req.body.acadamic
    });   
        try{
    
          const hr = await hrModel.find({email:req.body.email});
          
          if(hr.length>0){
            res.status(500).json({
              message: "emaill already exists"
             }); 
             return;
          }
  const salt = await bcrypt.genSalt(10);
req.body.password = await bcrypt.hash("123456", salt) ;
newacademicMember.password=req.body.password;
          const count= await counterModel.find();
          let newCount;
          if((count).length>0){
             newCount=count[0].academicCount+1
            newacademicMember.id="ac-"+newCount;
            console.log("hrrrr"+count[0].academicCount)
         
          
          }
          else{
            newCount=1;
            const newCounter=new counterModel({
              academicCount:1,
              Count:1,
            } );
            newCounter.save();
            newacademicMember.id="ac-"+1;
          }
        if(req.body.officeLocation){
            const location=await locationModel.findOne({name : req.body.officeLocation});
            if(!location){
                res.status(500).json({
                   message: "location does not exist"
                  }); 
                  return;}
  if(location.type!=="offices"){
    res.status(500).json({
        message: "location is not an office"
       }); 
       return;
                      }
     if(location.capacity===location.officeOccupants){
        res.status(500).json({
            message: "office full"
           }); 
           return;          
        }
        
       }
       const newAttendance=new attendanceModel({
        staffId:newacademicMember.id
      });
        const result= await newacademicMember.save()
        const result2= await newAttendance.save()
        const count2=await counterModel.updateOne({academicCount:newCount-1},{academicCount:newCount});
        if(req.body.officeLocation){
        const new2= await locationModel.updateOne({name:req.body.officeLocation},{ $inc: {officeOccupants:1}})}
        res.send(result)} 
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }

    }
    );
academicMemberRouter.route('/:id')
.delete(async (req, res)=>{ 
  try{
   
    const hr= await academicMember.findOne({id : req.params.id})
    if(hr){
      if(hr.officeLocation){
        const new1= await locationModel.updateOne({name:hr.officeLocation},   { $inc: {officeOccupants:-1}});
        }
    }
  const result= await academicMember.deleteOne({id : req.params.id})
      res.status(200).json({
        message: 'academicMember deleted',
    });
     }
        catch(err){    console.log(err);
          res.status(500).json({
            error: err
          });}})
//update academicMember
.put( async(req, res)=>
{   
    try{  if(req.body.email){
      const hr = await hrModel.find({email:req.body.email});
    if(hr.length>0){
      res.status(500).json({
        message: "emaill already exists"
       }); 
       return;
    }}     if(req.body.dayOff){
      res.status(500).json({
        message: "unallowed to change day off"
       }); 
       return
    }
       if(req.body.officeLocation){
          const location=await locationModel.findOne({name : req.body.officeLocation});
    if(!location){
        res.status(500).json({
           message: "location does not exist"
          }); 
          return;}
if(location.type!=="offices"){
res.status(500).json({
message: "location is not an office"
}); 
return;
              }
if(location.capacity===location.officeOccupants){
res.status(500).json({
    message: "office full"
   }); 
   return;          
}
const staff= await academicMember.findOne({id : req.params.id});
console.log(staff);
const result= await academicMember.findOneAndUpdate
({id : req.params.id}, req.body, {new: true});
if(staff.officeLocation){
const new1= await locationModel.updateOne({name:staff.officeLocation},   { $inc: {officeOccupants:-1}});
}
const new2= await locationModel.updateOne({name:req.body.officeLocation},{ $inc: {officeOccupants:1}})
res.send(result);}
else{
  const result= await academicMember.findOneAndUpdate
({id :req.params.id}, req.body, {new: true});
res.send(result);
}
           
           }
            catch(err){
              console.log(err);
          res.status(500).json({
            error: err
          });
            }})
 academicMemberRouter.route('/salary/:id')
 .put( async(req, res)=>
 {  
     try{    

 const result= await academicMember.findOneAndUpdate({id :req.params.id}, {salary:req.body.salary}, {new: true});

 res.send(result);}
             catch(err){
               console.log(err);
           res.status(500).json({
             error: err
           });
             }})
module.exports = academicMemberRouter;
