//done
const express = require('express')
const facultyRouter = express.Router()
const facultyModel = require('../../Models/faculty.model');
const departmentModel = require('../../Models/department.model');
<<<<<<< HEAD
facultyRouter.route('/')
.post(
=======
const {
  validatePostfaculty,
  validatePutfaculty

 }=require('../../middleware/faculty.validation')
facultyRouter.route('/')
.post(validatePostfaculty,
>>>>>>> 7dab368c06079ef26a9f15d4b7c71f20a12bb599
  async (req, res) => {
    const newfaculty= new facultyModel({
        name: req.body.name, 
    }) 
    try{ if(!(req.user.id.includes("hr-"))){
      res.send("you are not an hr");
      return;
    }
        const result= await newfaculty.save()
        res.send(result)} 
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }
    }
    );
facultyRouter.route('/:facultyName')
.delete(async (req, res)=>{ 
  try{if(!(req.user.id.includes("hr-"))){
    res.send("you are not an hr");
    return;
  }
<<<<<<< HEAD
=======
  const fac=await facultyModel.findOne({name:req.params.facultyName})
  if(!fac){
    res.send("facuulty does not exist");
    return;
  }
>>>>>>> 7dab368c06079ef26a9f15d4b7c71f20a12bb599
        const result= await facultyModel.deleteOne({name : req.params.facultyName})
        res.status(200).json({
          message: 'done',
      });
      try{
        const result= await departmentModel.updateMany({faculty: req.params.facultyName},{faculty: "undefined"})
     
     }catch(err){    console.log(err);
      res.status(500).json({
        error: err
      });
  }
     }
        catch(err){    console.log(err);
          res.status(500).json({
            error: err
          });}})
//update faculty
<<<<<<< HEAD
.put( async(req, res)=>
=======
.put(   validatePutfaculty,async(req, res)=>
>>>>>>> 7dab368c06079ef26a9f15d4b7c71f20a12bb599
{ try{if(!(req.user.id.includes("hr-"))){
  res.send("you are not an hr");
  return;
}
<<<<<<< HEAD
            const result= await facultyModel.findOneAndUpdate
=======
const fac=await facultyModel.findOne({name:req.params.facultyName})
if(!fac){
  res.send("facuulty does not exist");
  return;
}     const result= await facultyModel.findOneAndUpdate
>>>>>>> 7dab368c06079ef26a9f15d4b7c71f20a12bb599
            ({name : req.params.facultyName}, req.body, {new: true});
            res.send(result);
            if(req.body.name){
              try{
                const result= await departmentModel.updateMany({faculty: req.params.facultyName},{faculty: req.body.name})
             
             }catch(err){    console.log(err);
              res.status(500).json({
                error: err
              });}
            }
           }
            catch(err){
              console.log(err);
          res.status(500).json({
            error: err
          });
            }})

module.exports = facultyRouter;
