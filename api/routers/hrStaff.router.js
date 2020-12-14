const express = require('express')
const hrStaffRouter = express.Router()
const locationModel = require('../../Models/location.model');
const staffModel = require('../../Models/staff.model');
hrStaffRouter.route('/')
.post(
  async (req, res) => {
 const newStaff= new StaffModel({
    id:req.body.id,
    name:req.body.name,
    email:req.body.email,
    salary:req.body.salary,
    officeLocation:req.body.location,
    extraInformation:req.body.extraInformation,
    gender:req.body.gender,
    acadamic:req.body.acadamic
    });   
    if(req.body.dayOff)
    newStaff.dayOff=req.body.dayOff
    if(newStaff.dayOff!="Saturday" && newStaff.hr===true){
        res.status(500).json({
            message: "hr can not have their day off on days other than Saturday"
           });
         return; 
    }
    try{ 
        if(req.body.location){
            const location=await locationModel.findOne({name : req.body.location});
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
       locationModel.updateOne({name:req.body.location},{capacity:location.capacity+1})
        const result= await newStaff.save()
        res.send(result)} }
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }

    }
    );
hrStaffRouter.route('/:hrStaffName')
.delete(async (req, res)=>{ 
  try{
    const hr= await hrStaffModel.findOne({name : req.params.hrStaffName})
  
      const result= await hrStaffModel.deleteOne({name : req.params.hrStaffName})
      res.status(200).json({
        message: 'hrStaff deleted',
    });
     }
        catch(err){    console.log(err);
          res.status(500).json({
            error: err
          });}})
//update hrStaff
.put( async(req, res)=>
{ 
    try{
        if(req.body.staffIds){
            staffIds=req.body.staffIds;
            staffIds.array.forEach(element => {
                let staff=await staffModel.findOne({id:element})
                  if(!staff){
            res.status(500).json({
               message: "staff does not exist"
              });
            return; }
            });
        }
        if(req.body.faculty){
            const faculty=await facultyModel.findOne({name : req.body.faculty});
            if(!faculty){
                res.status(500).json({
                   message: "faculty does not exist"
                  }); 
                  return;
            } }    
             if(req.body.name){
              try{
                const result= await courseModel.updateMany({hrStaff: req.params.hrStaffName},{hrStaff: req.body.name})
             
             }catch(err){    console.log(err);
              res.status(500).json({
                error: err
              });}
            }
            const result= await hrStaffModel.findOneAndUpdate
            ({name : req.params.hrStaffName}, req.body, {new: true});
            res.send(result);
           }
            catch(err){
              console.log(err);
          res.status(500).json({
            error: err
          });
            }})

module.exports = hrStaffRouter;
