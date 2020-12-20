const express = require('express')

const router= express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const academicMemberModel = require('../../Models/academicMember.model')
const Vtokens= require('../auth/verifyToken');
const hrStaff = require('../../Models/hr.model');
const attendenceModel= require('../../Models/attendence.model');
const hrmodel = require('../../Models/hr.model');
const requestsModel= require('../../Models/requests.model');
const logoutModel=require('../../Models/logout.model')




  router.get('/viewProfile',async (req, res) => {
    try {
      const userAcdemicMember= await academicMemberModel.findOne({id:req.id})
       const userHrStaff=await hrStaff.findOne({id:req.id})
      if(userAcdemicMember){
          res.send(userAcdemicMember)
      }
      if(userHrStaff){
           res.send(userHrStaff)
      }
      else{
          res.status(400).send("you can't veiw the profile  as you are not logged in ")

      }
    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }

)
router.put('/UpdateProfile',async (req, res) => {
    try {
     const userAcdemicMember= await academicMemberModel.findOne({id:req.id})
     const userHrStaff=await hrStaff.findOne({id:req.id})

      if(userAcdemicMember){
        
         const  email=req.body.email;
         const gender=req.body.gender;
         const officeLocation=req.body.officeLocation;
         const extraInformation=req.body.extraInformation;
         const name=req.body.name
         const id=req.body.id
         const salary=req.body.salary
         const department=req.body.department
         const faculty=req.body.faculty
        
         if(id&& id.length>0){
            res.send("you can't update id");
         }
         if(name && name.length>0){
            res.send("you can't update name ");
         }
         if(salary && salary.length>0 ){
            res.send("you can't update your salary");
         }
         if(department &&department.length>0){
            res.send("you can't update your department");
         }
         if(faculty && faculty.length){
            res.send("you can't update your faculty");
         }
        
         await   academicMemberModel.findOneAndUpdate( { id:req.id},{gender:gender,email:email,extraInformation:extraInformation,officeLocation:officeLocation })
         res.send("updated successfully")
      }
      if(userHrStaff){
        const  email=req.body.email;
         const gender=req.body.gender;
         const officeLocation=req.body.officeLocation;
         const extraInformation=req.body.extraInformation;
         const name=req.body.name
         const id=req.body.id
         const salary=req.body.salary
         const department=req.body.department
         const faculty=req.body.faculty
        
         if(id&& id.length>0){
            res.send("you can't update id");
         }
         if(name && name.length>0){
            res.send("you can't update name ");
         }
         if(salary && salary.length>0 ){
            res.send("you can't update your salary");
         }
         if(department &&department.length>0){
            res.send("you can't update your department");
         }
         if(faculty && faculty.length){
            res.send("you can't update your faculty");
         }


        
      await   hrmodel.findOneAndUpdate( { id:req.id},{gender:gender,email:email,extraInformation:extraInformation,officeLocation:officeLocation })
      res.send("updated successfully") 
      }

      if(!userAcdemicMember && !userHrStaff){
          res.send("you need to log in first")
      }
      
    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }

)

router.put('/resetPassword',async (req, res) => {
    try {
       const userAcdemicMember= await academicMemberModel.findOne({id:req.id})
       const userHrStaff=await hrStaff.findOne({id:req.id})
      if(userAcdemicMember){
          const password=req.body.password
        const salt= await bcrypt.genSalt(10)
    password=await bcrypt.hash(password,salt)
       await academicMemberModel.findOneAndUpdate( { id:req.id},{password:password,changePassword:false})
        res.send("successfully updated")
    }
      
      if(userHrStaff){
        const password=req.body.password
        const salt= await bcrypt.genSalt(10)
    password=await bcrypt.hash(password,salt)
       await hrmodel.findOneAndUpdate( { id:req.id},{password:password,changePassword:false})
       res.send("successfully updated")
      }
      if(!userAcdemicMember && !userHrStaff){
        res.send("you need to log in first")
    }
    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }

)



 








