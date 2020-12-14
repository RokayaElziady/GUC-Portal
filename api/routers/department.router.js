const express = require('express')
const departmentRouter = express.Router()
const departmentModel = require('../../Models/department.model');
const courseModel = require('../../Models/course.model');
const facultyModel = require('../../Models/faculty.model');
departmentRouter.route('/')
.post(
  async (req, res) => {
 const newdepartment= new departmentModel({
        name: req.body.name, 
        faculty:req.body.faculty
    });   
    try{ 
        if(req.body.faculty){
        const faculty=await facultyModel.findOne({name : req.body.faculty});
        if(!faculty){
            res.status(500).json({
               message: "faculty does not exist"
              }); 
              return;
        } }
        const result= await newdepartment.save()
        res.send(result)} 
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }

    }
    );
departmentRouter.route('/:departmentName')
.delete(async (req, res)=>{ 
  try{
    try{
        const result= await courseModel.updateMany({department: req.params.departmentName},{department: "unassigned"})

     }catch(err){    console.log(err);
      res.status(500).json({
        error: err
      });}
      const result= await departmentModel.deleteOne({name : req.params.departmentName})
      res.status(200).json({
        message: 'department deleted',
    });
     }
        catch(err){    console.log(err);
          res.status(500).json({
            error: err
          });}})
//update department
.put( async(req, res)=>
{ 
    try{
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
                const result= await courseModel.updateMany({department: req.params.departmentName},{department: req.body.name})
             
             }catch(err){    console.log(err);
              res.status(500).json({
                error: err
              });}
            }
            const result= await departmentModel.findOneAndUpdate
            ({name : req.params.departmentName}, req.body, {new: true});
            res.send(result);
           }
            catch(err){
              console.log(err);
          res.status(500).json({
            error: err
          });
            }})

module.exports = departmentRouter;
