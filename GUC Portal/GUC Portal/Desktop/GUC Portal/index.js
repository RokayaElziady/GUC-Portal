const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const schedule=require('./api/routers/schedule.router')
const request = require('./api/routers/requests.router')
const HOD = require('./api/routers/HOD.router')
const courseInstructor = require('./api/routers/courseInstructor.router')
const scheduleModel=require('./Models/schedule.model')
const academicMemberModel=require('./Models/academicMember.model')
const slotsModel=require('./Models/slots.model')
const courseModel=require('./Models/course.model')
const departementModel=require('./Models/department.model')
const requestsModel = require('./Models/requests.model');
const {
  requestStatus,
  requestType
} = require('./api/enums');
const app = express();
const { connectDB } = require('./config/dbConfig')
const schedulemodel = require('./Models/schedule.model')
const locationModel = require('./Models/location.model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
connectDB();
//app.use(verify)


// var ss=new scheduleModel(
//   { member_email: 'rokaya',
//    slots:[
//      {location:'c701',
//       course:'math'
//      },
//      {
//       location:'c702',
//       course:'math2'
//      }
//    ] }
// )
// ss.save()

// var a=new academicMemberModel({
//   id:"lala",
//   name:"haha",
//   email:"nadine",
//   courses:["5fd8c3f5e952fd1984ba8d7a"],
//   role:"ta"
// })
// a.save();


// var a=new academicMemberModel({
//   id:"lalabb",
//   name:"hahann",
//   email:"rokaya",
//   courses:["5fd8c3f5e952fd1984ba8d7a"],
//   role:"coordinator"
// })
// a.save();


// var a =new requestModel({
//   to:"rokaya",
//   type:requestType.SLOT_LINKING
// })
// a.save()


// var b =new requestModel({
//   to:"rokaya",
//   type:requestType.SLOT_LINKING
// })
// b.save()


// var c =new requestModel({
//   to:"rokaya",
//   type:requestType.MATERNITY_LEAVE
// })
// c.save()

// var c =new courseModel({
//   coordinator:"rokaya",
//   name:"Math",
// })
// c.save()

// var a=new locationModel({
//   name:"c7"
// b.save();
// var c =new departementModel({
//   HOD: "moh",
//   name:"ana bagarrab"
// })
// c.save();
// var a =new slotsModel({
//   course:"cs"
// })
// a.save()




app.use('/schedule',schedule)
app.use('/request', request)
app.use('/HOD', HOD)
app.use('/courseInstructor', courseInstructor);
// app.use((req, res) => {
//   res.status(404).send({ err: 'No such url' })
// })
async function test() {
  // await academicMemberModel.insertMany([
  //   {
  //     id: "1",
  //     name: "hagar",
  //     department: "CSEN",
  //     courses: ["CSEN704", "CSEN201"]
  //   },
  //   { 
    
  //     id: "2",
  //      name: "hagar2",
  //     department: "EN",
  //     courses: ["EN704", "CSEN201"]
  //   }],
  //   function (error, docs) {
     
  //   });
  // await courseModel.insertMany([{
  //       name: "CSEN704",
  //       department: ["CSEN"]
  //     },
  //     {
  //       name: "CSEN201",
  //       department: ["CSEN", "EN"]
  //     }
  //   ],
  //   function (error, docs) { });
  // await departementModel.insertMany([{name:"CSEN"},{name:"EN"}])
  // await requestsModel.insertMany([{
  //         from: "1",
  //         to: "hod id",
  //         type: requestType.ACCIDENTAL_LEAVE,
  //         reason: "ana 3ayz amshy mn 3'er reason",
  //         status: requestStatus.PENDING,
  //         course:"CSEN704",
  //         slot: "_id bta3 el slot",
  //         dayOff: "wenta malak da leave request"         
  // },
  // {
  //   from: "1",
  //   to: "hod id",
  //   type: requestType.CHANGE_DAY_OFF,
  //   reason: "ana 3ayz a3'ayar el day off ",
  //   status: requestStatus.PENDING,
  //   course: "CSEN704",
  //   slot: "_id bta3 el slot",
  //   dayOff: "Sunday"
  // }, {
  //   from: "2",
  //   to: "hod id",
  //   type: requestType.ACCIDENTAL_LEAVE,
  //   reason: "ana 3ayz amshy mn 3'er reason",
  //   status: requestStatus.PENDING,
  //   course: "CSEN201",
  //   slot: "_id bta3 el slot",
  //   dayOff: "wenta malak da leave request"
  // }, {
  //   from: "2",
  //   to: "hod id",
  //   type: requestType.CHANGE_DAY_OFF,
  //   reason: "ana 3ayz a3'ayar el day off ",
  //   status: requestStatus.PENDING,
  //   course: "CSEN201",
  //   slot: "_id bta3 el slot",
  //   dayOff: "Sunday"
  //   },
  // {
  //   from: "1",
  //   to: "hod id",
  //   type: requestType.ACCIDENTAL_LEAVE,
  //   reason: "ana 3ayz amshy mn 3'er reason",
  //   status: requestStatus.PENDING,
  //   course: "CSEN704",
  //   slot: "_id bta3 el slot",
  //   dayOff: "wenta malak da leave request"
  // }
  // ])
  await slotsModel.insertMany([{
    startTime:100,
    endTime: 100,
    day: "Sunday",
    course: "CSEN704"
  }, {
     startTime: 100,
       endTime: 100,
       day: "Sunday",
       course: "CSEN704"
    }, {
       startTime: 100,
         endTime: 100,
         day: "Sunday",
        course: "CSEN704",
         academicMember:"1"
    },
    {
      startTime: 100,
      endTime: 100,
      day: "Sunday",
      course: "CSEN201",
      academicMember: "2"
    },
     {
       startTime: 100,
       endTime: 100,
       day: "Sunday",
       course: "CSEN201",
       academicMember: "1"
    },
      {
        startTime: 100,
        endTime: 100,
        day: "Sunday",
        course: "CSEN201"
      }
  ])

}
let res;
async function findAll() {

  await requestsModel.find({}, function (err, docs) {
    res = docs;
  });;
  return res;
}

// test().then(() => {
//   findAll().then(() => {
//     console.log(res);
//   })
// });




const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}