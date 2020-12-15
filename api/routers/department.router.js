const express = require('express')
const departmentRouter = express.Router()
const departmentModel = require('../../Models/department.model');
const courseModel = require('../../Models/course.model');
const facultyModel = require('../../Models/faculty.model');
const acadamicMemberModel= require('../../Models/academicMember.model');
const e = require('express');
departmentRouter.route('/')
.post(
  async (req, res) => {
 const newdepartment= new departmentModel({
        name: req.body.name, 
        faculty:req.body.faculty,
        HOD:req.body.HOD,
        courseNames:req.body.courseNames,
        staffIds:req.body.staffIds
    });   
    try{ 
      
   
if(req.body.courseNames){
         const courses=await courseModel.find().where('name').in(req.body.courseNames).exec();
            //some courses do not exist
            if(courses.length!=req.body.courseNames.length)
            {res.status(500).json({
                                message: "some courses do not exist or not array"
                               }); 
                               return;
            }
          }
         if(req.body.staffIds){   
            //some staff do not exist
            const staffs=await acadamicMemberModel.find().where('id').in(req.body.staffIds).exec();
            if(staffs.length!==req.body.staffIds.length)
            {res.status(500).json({
                                message: "some staff members do not exist or not array"
                               }); 
                               return;
            }
          
        }
        if(req.body.faculty){
        const faculty=await facultyModel.findOne({name : req.body.faculty});
        if(!faculty){
            res.status(500).json({
               message: "faculty does not exist or not array"
              }); 
              return;
        } }
        const result= await newdepartment.save()
        res.send(result);
          //add the department to this courses
          if(req.body.courseNames)
          for(let i=0;i<req.body.courseNames.length;i++){
            const course1=await courseModel.findOne({name:req.body.courseNames[i]});
              if(course1.department==null)
            course1.department=[];             
            course1.department.push(req.body.name)
            const course2=await courseModel.updateOne({name:req.body.courseNames[i]},{department:course1.department})
        }
        if(req.body.staffIds)
        for(let i=0;i<req.body.staffIds.length;i++){             
            const staff=await acadamicMemberModel.updateOne({id:req.body.staffIds[i]},{departement:req.body.name})
        }
        
    } 
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
const department= await  departmentModel.findOne({name : req.params.departmentName})
  if(department.courseNames)
for(var i=0;i<department.courseNames.length;i++){   
    let course=await courseModel.findOne({name:department.courseNames[i]});
    course.department=  course.department.filter(item => item != req.params.departmentName);
  console.log(course.department)
  let course2=await courseModel.updateOne({name:department.courseNames[i]}, {department:course.department});
  }
 
const staff3=await acadamicMemberModel.updateMany({departement:req.params.departmentName},{departement:"unassigned"})
      const result= await departmentModel.deleteOne({name : req.params.departmentName})
      res.status(200).json({
        message: 'department deleted',
    });
     }
        catch(err){    console.log(err);
          res.status(500).json({
            error: err,
            
          });}})
//update department if staff or course changed or name or other attributes
.put( async(req, res)=>
{ 
    try{
        const department= await  departmentModel.findOne({name : req.params.departmentName});
        if(req.body.faculty){
            const faculty=await facultyModel.findOne({name : req.body.faculty});
            if(!faculty){
                res.status(500).json({
                   message: "faculty does not exist or not array"
                  }); 
                  return;
            } }   
            if(req.body.courseNames){
                const courses=await courseModel.find().where('name').in(req.body.courseNames).exec();
                   //some courses do not exist
                   if(courses.length!=req.body.courseNames.length)
                   {res.status(500).json({
                                       message: "some courses do not exist or not array"
                                      }); 
                                      return;
                   }
                 }
                if(req.body.staffIds){   
                   //some staff do not exist
                   const staffs=await acadamicMemberModel.find().where('id').in(req.body.staffIds).exec();
                   console.log(staffs)
                   if(staffs.length!==req.body.staffIds.length)
                   {res.status(500).json({
                                       message: "some staff members do not exist or not array"
                                      }); 
                                      return;
                   }
                 
               }
               let departementName='';
               if(req.body.name)  
               departementName= req.body.name
               else
               departementName=req.params.departmentName
               const result= await departmentModel.findOneAndUpdate
            ({name : req.params.departmentName}, req.body, {new: true});
            res.send(result);
            if(req.body.staffIds||req.body.name){
        
                if(req.body.staffIds){
                            //make all unassigned
                const staff1=await acadamicMemberModel.updateMany({departement:req.params.departmentName},{departement:"unassigned"});
                for(let i=0;i<req.body.staffIds.length;i++){ 
                    const staff=await acadamicMemberModel.updateOne({id:req.body.staffIds[i]},{departement:departementName})
                }}
                else{
                    const staff1=await acadamicMemberModel.updateMany({departement:req.params.departmentName},{departement:departementName});
                }
        }
        //handle if courses updated
        if(req.body.courseNames||req.body.name){
            if(req.body.courseNames){
            for(var i=0;i<department.courseNames.length;i++){   
                let course=await courseModel.findOne({name:department.courseNames[i]});
                course.department=  course.department.filter(item => item != req.params.departmentName);
              console.log(course.department)
              let course2=await courseModel.updateOne({name:department.courseNames[i]}, {department:course.department});
              }
        for(let i=0;i<req.body.courseNames.length;i++){
          const course1=await courseModel.findOne({name:req.body.courseNames[i]});
            if(course1.department==null)
          course1.department=[];             
          course1.department.push(req.body.name)
          const course2=await courseModel.updateOne({name:req.body.courseNames[i]},{department:course1.department})}
console.log(department.courseNames);
      }
      else{ for(let i=0;i< department.courseNames.length;i++){
        const course1=await courseModel.findOne({name: department.courseNames[i]});
          if(course1.department==null)
        course1.department=[];   
        course1.department=  course1.department.filter(item => item != req.params.departmentName);       
        course1.department.push(req.body.name)
        console.log("departmentss")
        console.log(  course1.department);
        const course2=await courseModel.updateOne({name: department.courseNames[i]},{department:course1.department})}}
     }
        
          
           }
            catch(err){
              console.log(err);
          res.status(500).json({
            error: err
          });
            }})

module.exports = departmentRouter;
