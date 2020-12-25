const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const app = express();
const location=require('./api/routers/location.router');
const facultyRoute=require('./api/routers/faculty.router');
const { connectDB } = require('./config/dbConfig');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const hrRoute=require('./api/routers/hrStaff.router');
const acadamicRoute=require('./api/routers/acadamic.router');
const courseRoute=require('./api/routers/course.router');
const departmentRoute=require('./api/routers/department.router');
const attendance=require('./api/routers/attendance.router');
const schedule=require('./api/routers/schedule.router')
const staff=require('./api/routers/staffMembers.router')
const log=require('./api/routers/logging.route')
const HOD=require('./api/routers/HOD.router')
const courseInstructor=require('./api/routers/courseInstructor.router')
const locationModel = require('./Models/location.model');
const requestsModel = require('./Models/requests.model');
const academicMemberModel = require('./Models/academicMember.model');
const scheduleModel = require('./Models/schedule.model');
const courseModel = require('./Models/course.model');
const departementModel = require('./Models/department.model');
const request=require('./api/routers/requests.router')
connectDB()
app.use('/logging',log)
app.use(verify)
app.use('/hrStaff',hrRoute);
app.use('/acadamic',acadamicRoute);
app.use('/courses',courseRoute);
app.use('/location',location);
app.use('/faculties',facultyRoute);
app.use('/departments',departmentRoute);
app.use('/attendance',attendance);
app.use('/schedule',schedule)
app.use("/request",request)
app.use('/staff',staff)
app.use('/HOD', HOD);
app.use('/courseInstructor', courseInstructor);
app.use((req, res) => {
  res.status(404).send({ err: 'No such url' })
})


// var loc=new locationModel({
//   name:"l1",
//   type:"offices",
// })
// loc.save()

// loc=new locationModel({
//   name:"l2",
//   type:"lecture halls"
// })

// loc.save()


// var cor=new courseModel({
//   name:"math",
//   department:"MET"
// })

// cor.save()

// var cor=new courseModel({
//   name:"cs",
//   department:"MET"
// })

// cor.save()

// var dep=new departementModel({
//   name:"MET",
//   HOD:"hagar"
// })

// dep.save()

// var a=new academicMemberModel({
//   id:"ac-1",
//   name:"rokaya",
//   email:"rokaya",
//   gender:"female",
//   role:"coordinator",
//   department:"MET",
//   password:"$2a$10$/eUxJXJPDc6Lm5ZyGe0FA.8dSeem6xXLLNVi30Q7kAl9QLHRxPL36",
//   changePassword:true

// })
// a.save()


// var x=new academicMemberModel({
//   id:"ac-1",
//   name:"a",
//   email:"a",
//   password:"$2b$10$aaqp1b3ld7Aht2.0icNyGeMensZG.6W9vlQfewd.Jzwb/vjtFIuBi",
//   role:"coordinator"
// })
// x.save()

async function test() {
  await academicMemberModel.insertMany([{
    id: "coordinator1",
    name: "hi",
     gender:"female",
    role:"hi",
    email: "coordinator1",
    password: "$2a$10$/eUxJXJPDc6Lm5ZyGe0FA.8dSeem6xXLLNVi30Q7kAl9QLHRxPL36",
    department: "EN",
    courses: ["CSEN201"]
  },
    {
      role: "hi",
      name: "hi",
        gender: "female",
    id: "coordinator2",
    email: "coordinator2",
    password: "$2a$10$/eUxJXJPDc6Lm5ZyGe0FA.8dSeem6xXLLNVi30Q7kAl9QLHRxPL36",
    department: "EN",
    courses: ["CSEN201"]
    }]);
  
}
//test().then(()=>{console.log("added to database successfully")})
//MYTOKEN
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2MDg4OTQyNjJ9.Sv8t8zyWG1b_3_2b9KS-LpjBbglZo0T2ttmahuVzgsk

const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}



