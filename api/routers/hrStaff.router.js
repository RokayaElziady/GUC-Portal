const express = require('express')
const hrStaffRouter = express.Router()
const locationModel = require('../../Models/location.model');
const hrStaff = require('../../Models/hr.model');
const counterModel = require('../../Models/counters.model');
const courseModel = require('../../Models/course.model');
const { findOneAndUpdate } = require('../../Models/hr.model');
hrStaffRouter.route('/')
.post(
  async (req, res) => {
 const newhrStaff= new hrStaff({

    name:req.body.name,
    email:req.body.email,
    salary:req.body.salary,
    officeLocation:req.body.location,
    extraInformation:req.body.extraInformation,
    gender:req.body.gender,
    acadamic:req.body.acadamic
    });   
    const count=counterModel.find();
    if(count){
      newhrStaff.id=count[0].hrCount+1;
      const count=findOneAndUpdate({hrCount:count[0].hrCount},{hrCount:count[0].hrCount+1});
    }
    else{
      const newCounter=new counterModel({
        hrCount:1,
        Count:1,
      } )
    }
    newhrStaff.id="hr-"+ newhrStaff.idNumber2;
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
       locationModel.updateOne({name:req.body.location},{capacity:location.capacity+1})}
        const result= await newhrStaff.save()
        res.send(result)} 
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
