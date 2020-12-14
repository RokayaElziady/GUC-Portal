const express = require('express')
const courseRouter = express.Router()
const courseModel = require('../../Models/course.model');
const departmentModel = require('../../Models/department.model');
courseRouter.route('/')
.post(
  async (req, res) => {
 const newcourse= new courseModel({
        name: req.body.name, 
        department:req.body.department
    });   
    try{ 
        if(req.body.department){
        const department=await departmentModel.findOne({name : req.body.department});
        if(!department){
            res.status(500).json({
               message: "department does not exist"
              }); 
              return;
        } }
        const result= await newcourse.save()
        res.send(result)} 
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }

    }
    );
courseRouter.route('/:courseName')
.delete(async (req, res)=>{ 
  try{
      const result= await courseModel.deleteOne({name : req.params.courseName})
      res.status(200).json({
        message: 'course deleted',
    });
     }
        catch(err){  
          console.log(err);
          res.status(500).json({
            error: err
          });}})
//update course
.put( async(req, res)=>
{ 
    try{
        if(req.body.department){
            const department=await departmentModel.findOne({name : req.body.department});
            if(!department){
                res.status(500).json({
                   message: "department does not exist"
                  }); 
                  return;
            } } 
            const result= await courseModel.findOneAndUpdate
            ({name : req.params.courseName}, req.body, {new: true});
            res.send(result);
           }
            catch(err){
              console.log(err);
          res.status(500).json({
            error: err
          });
            }})

module.exports = courseRouter;
