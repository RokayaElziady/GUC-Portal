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
<<<<<<< HEAD
const HOD=require('./api/routers/HOD.router')
const courseInstructor=require('./api/routers/courseInstructor.router')
=======
>>>>>>> d0d7395c6b9571637b3520e7eb74a04a1c712856
const locationModel = require('./Models/location.model');
const requestsModel = require('./Models/requests.model');
const academicMemberModel = require('./Models/academicMember.model');
const scheduleModel = require('./Models/schedule.model');
connectDB()
app.use('/logging',log)
app.use(verify)
app.use('/hrStaff',hrRoute);
app.use('/academic',acadamicRoute);
app.use('/courses',courseRoute);
app.use('/location',location);
app.use('/faculties',facultyRoute);
app.use('/departments',departmentRoute);
app.use('/attendance',attendance);
app.use('/schedule',schedule)
app.use('/staff',staff)

<<<<<<< HEAD
app.use('/HOD', HOD);
app.use('/courseInstructor', courseInstructor);
=======
>>>>>>> d0d7395c6b9571637b3520e7eb74a04a1c712856
app.use((req, res) => {
  res.status(404).send({ err: 'No such url' })
})

<<<<<<< HEAD

=======
>>>>>>> d0d7395c6b9571637b3520e7eb74a04a1c712856
// var loc=new requestsModel({
//   from:"kaka"
// })
// loc.save()

// loc=new locationModel({
//   name:"lala3"
// })
// loc.save()


// var x=new academicMemberModel({
<<<<<<< HEAD
//   id:"ac-1",
//   name:"a",
//   email:"a",
//   password:"$2b$10$aaqp1b3ld7Aht2.0icNyGeMensZG.6W9vlQfewd.Jzwb/vjtFIuBi",
//   role:"coordinator"
// })
// x.save()

=======
//   id:"k",
//   name:"haa",
//   email:"jajaj"
// })
// x.save()

var y=new scheduleModel({
  academicMember:"k"
})
y.save()



>>>>>>> d0d7395c6b9571637b3520e7eb74a04a1c712856


const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}



