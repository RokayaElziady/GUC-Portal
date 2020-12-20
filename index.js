const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const app = express();
const location=require('./api/routers/location.router');
const facultyRoute=require('./api/routers/faculty.router');
const { connectDB } = require('./config/dbConfig');
const {
  requestStatus,
  requestType
} = require('./api/enums');
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
const HOD = require('./api/routers/HOD.router');
const courseInstructor=require('./api/routers/courseInstructor.router');
const departementModel = require('./Models/department.model');
connectDB()
app.use(verify)
app.use('/hrStaff',hrRoute);
app.use('/acadamic',acadamicRoute);
app.use('/courses',courseRoute);
app.use('/location',location);
app.use('/faculties',facultyRoute);
app.use('/departments',departmentRoute);
app.use('/attendance',attendance);
app.use('/schedule', schedule);
app.use('/HOD', HOD);
app.use('/courseInstructor', courseInstructor);
app.use((req, res) => {
  res.status(404).send({ err: 'No such url' })
})
async function test() {
  // let today = new Date();
  // today.setDate(11);
  // let dayAdeem = new Date();
  // dayAdeem.setDate(11);
  // dayAdeem.setMonth(1);
  // dayAdeem.setFullYear(2020);
  //   await academicMemberModel.insertMany([
  //     {
  //       id: "20", //ACCEPTED ANNUAL LEAVE UPDATED
  //       name: "hod",
  //       email: "hod",
  //       lastDayUpdated: dayAdeem,
  //       annualLeaves: 2.5,
  //       accidentalLeaves: 0
  //     }
  //     , {
  //       id: "3", //ACCEPTED ANNUAL LEAVE UPDATED
  //       name: "hagar3",
  //       email: "hagar3",
  //       lastDayUpdated: dayAdeem,
  //       annualLeaves: 2.5,
  //       accidentalLeaves: 0
  //     },
      
  //     {
  //       id: "4", //NOT ACCEPTED ANNUAL LEAVE  AND ACCIDENTAL
  //       name: "hagar4",
  //       email: "hagar4",
  //       lastDayUpdated: dayAdeem,
  //       annualLeaves: 0.5,
  //       accidentalLeaves: 6
  //     },
  //     {
  //       id: "5", //ACCEPTED ACCIDENTAL LEAVE UPDATED
  //       name: "hagar5",
  //       email: "hagar5",
  //       lastDayUpdated: dayAdeem,
  //       annualLeaves: 2.5,
  //       accidentalLeaves: 0
  //     }
  //   ]);
  // await requestsModel.insertMany([
  //   { from: "3", to: "20", type: requestType.ANNUAL_LEAVE, status: requestStatus.PENDING }
  //   , {
  //     from: "3",
  //     to: "20",
  //     type: requestType.ANNUAL_LEAVE,
  //     status: requestStatus.PENDING
  //   },
  //    {
  //      from: "4",
  //      to: "20",
  //      type: requestType.ANNUAL_LEAVE,
  //      status: requestStatus.PENDING
  //   },
  //     {
  //       from: "5",
  //       to: "20",
  //       type: requestType.ACCIDENTAL_LEAVE,
  //       status: requestStatus.PENDING
  //   },
  //      {
  //        from: "4",
  //        to: "20",
  //        type: requestType.ACCIDENTAL_LEAVE,
  //        status: requestStatus.PENDING
  //      }
  // ])
  //await departementModel.insertMany([{ HOD: "20", name: "CSEN" }, { HOD: "17", name: "EN" }]);
}

 //test().then(()=>{console.log("added to database successfully")});




const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}