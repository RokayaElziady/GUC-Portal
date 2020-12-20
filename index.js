const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const app = express();
const location=require('./api/routers/location.router');
const facultyRoute=require('./api/routers/faculty.router');
const { connectDB } = require('./config/dbConfig');
const bcrypt=require('bcrypt')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const hrRoute=require('./api/routers/hrStaff.router');
const acadamicRoute=require('./api/routers/acadamic.router');
const courseRoute=require('./api/routers/course.router');
const departmentRoute=require('./api/routers/department.router');
const attendance=require('./api/routers/attendance.router');
const schedule=require('./api/routers/schedule.router')
const locationModel = require('./Models/location.model');
const requestsModel = require('./Models/requests.model');
const academicMemberModel = require('./Models/academicMember.model');
const scheduleModel = require('./Models/schedule.model');

const memberAttendance=require('./api/routers/MemberAttendance')
// const jwt = require('jsonwebtoken')
connectDB()
app.use('/memberAttendance',memberAttendance)

// app.use(verify)
app.use('/hrStaff',hrRoute);
app.use('/acadamic',acadamicRoute);
app.use('/courses',courseRoute);
app.use('/location',location);
app.use('/faculties',facultyRoute);
app.use('/departments',departmentRoute);
app.use('/attendance',attendance);
app.use('/schedule',schedule);


app.use((req, res) => {
  res.status(404).send({ err: 'No such url' })
})

// var loc=new requestsModel({
//   from:"kaka"
// })
// loc.save()

// loc=new locationModel({
//   name:"lala3"
// })
// loc.save()


// var x=new academicMemberModel({
//   id:"k",
//   name:"haa",
//   email:"jajaj"
// })
// x.save()

var y=new scheduleModel({
  academicMember:"k"
})
y.save()





const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}