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
let id;
let role;

router.post('/login',
  async (req, res) => {
      try{
        console.log(await bcrypt.compare("$2b$10$mueDTpkYYPB9YINCsVYPIuTiylI9jBfpf9J0Ybnvk0aQwmXmGJmTO","1234"))
      const email =req.body.email
      const password=req.body.password 
      var newpassword=req.body.newpassword
      if(!email){
        console.log("You must log in using email")
          return res.status(401).send('You must log in using email')
         
      }
      if(!password){
        console.log("You must log in using password")
        return res.status(401).send('You must log in using password')
       
    }
    const userAcdemicMember= await academicMemberModel.findOne({email:email})
    const userHrStaff=await hrStaff.findOne({email:email})
   
    if(userAcdemicMember.length===0 && userHrStaff===0){
        console.log("you must sign up first or you must be added by hr first")
        return res.send('you must sign up first or you must be added by hr first')  
    }
    if (userAcdemicMember){ 
        console.log("entered useracdemic member")
        console.log("comparing password with bcrypted password")
        const correctPassword=await bcrypt.compare(password,userAcdemicMember.password)
console.log("pass"+correctPassword);
        if(!correctPassword){
            return res.status(400).send('Invalid Password')
        }
 if(userAcdemicMember.changePassword){
                if(newpassword){                               //error here when entering newpassword 
                    const salt= await bcrypt.genSalt(10)
                    console.log("here")
                    newpassword=await bcrypt.hash(newpassword,salt)
                    console.log(newpassword)
                    await academicMemberModel.updateOne({ email:email}, { changePassword: false,password:newpassword})
                    }
                else{
                    return  res.send("enter new password");
            }
                }   
                const payload = {
                    id:userAcdemicMember.id,role:userAcdemicMember.role
                };
                //const key = 'ueihudchnjfrhiu8u2309w-d0-civj njbvhj';
                // const token = jwt.sign(payload, key);
                // res.header('auth-token', token); 
                console.log("hhea")
             const token =await jwt.sign(payload,"HS256")
          
            res.header('token',token).send(token)
           
            var decoded =await jwt.verify(token, 'HS256');
      
            console.log(decoded.id) 
            
        }
    
    if(userHrStaff){
        console.log("entered hr member")
        console.log("comparing password with bcrypted password")
        const correctPassword=bycrypt.compare(password,userHrStaff.password)
        if(!correctPassword){
            return res.status(400).send('Invalid Password')
        }
 if(userHrStaff.changePassword){
                if(newpassword){                               //error here when entering newpassword 
                    const salt= await bcrypt.genSalt(10)
                    newpassword=await bcrypt.hash(newpassword,salt)
                    await hrmodel.updateOne({ email:email}, { changePassword: false,password:newpassword})
                    }
                else{
                    return  res.send("enter new password");
            }
                }   
                const payload = {
                    id:userHrStaff.id,role:userHrStaff.role
                };
                //const key = 'ueihudchnjfrhiu8u2309w-d0-civj njbvhj';
                // const token = jwt.sign(payload, key);
                // res.header('auth-token', token); 
       
             const token =await jwt.sign(payload,"HS256")
            
            res.setHeader('token',token).send(token);
            

    }}
    catch(err){
        console.log(err);
          res.status(500).json({error: err });
    }
  })
  router.post('/verify',((req, res) => {
    const token = res.header.token
    // TODO deny access if token does not exist
    res.user =  jwt.verify(token,"HS256" )
    console.log(req.user.id)
    next()
  }))
  module.exports=router
