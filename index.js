const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const app = express();
//const http = require("http");

//const socketIO = require("socket.io");
//const server = http.createServer(app);
//const io = socketIO(server);
// io.on("connection", socket => {
//   cors: {
//     origin: "http://localhost:3001";
//     methods: ["GET", "POST","PUT","DELETE"]
//   }
//   console.log("io soket connected")
//   socket.on("notification", () => {
//     notificationModel.find({}).then(not=> {
//       io.sockets.emit("notification", not);
//     });
//   });
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

var corsO={
      origin: "http://localhost:5000",
      methods: ["GET", "POST","PUT","DELETE"]
    }
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
const request=require('./api/routers/requests.router');
const hrmodel = require('./Models/hr.model');
var cors = require('cors');
const slotsModel = require('./Models/slots.model');
const replacementModel = require('./Models/replacements.model');
const notificationModel = require('./Models/notification.model');

const path=require('path')



connectDB()
app.use('/',(req,res,next)=>{
  res.header('Access-Control-Allow-Credentials', 'true');
  next()
})

app.use('/',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin', 'true');
  next()
})

app.use(cors())
app.use('/logging',log)
app.use('/',verify)
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

// const s=new replacementModel({
//   academicMember:"ac-1",
//   slot:"5fe5bdd648f1f75a545457ff"
// })
// s.save()

const a =new hrmodel({
  id:"hr-1",
  name:"nadine",
  email:"nadine",
  password:"$2a$10$f8gx6lpROA0SBwDwAen4neFYZo4XNafgGGRXIecgTS8DhbjuITVUK", 
})

//a.save()

if(process.env.NODE_ENV==='production'){
  
  app.use(express.static('frontend/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
  
}

const port =  precess.env.PORT|| 5000;

  app.listen(port, () => console.log(`Server up and running on ${port}`))






