const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const schedule=require('./api/routers/schedule.router')
const request=require('./api/routers/requests.router')
const scheduleModel=require('./Models/schedule.model')
const academicMemberModel=require('./Models/academicMember.model')
const slotsModel=require('./Models/slots.model')
const courseModel=require('./Models/course.model')
const departementModel=require('./Models/department.model')


const app = express()
const { connectDB } = require('./config/dbConfig')
const schedulemodel = require('./Models/schedule.model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
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
//   email:"nadine",
//   courses:["math","cs"]
// })
// a.save();

// var b=new academicMemberModel({
//   email:"rokaya",
//   courses:["math"],
//   departement:"5fd546436ca519335c27c761"
// })
// b.save();
var c =new departementModel({
  HOD:"moh"
})
c.save()
// var a =new slotsModel({
//   course:"cs"
// })
// a.save()

app.use('/schedule',schedule)
app.use('/request',request)
app.use((req, res) => {
  res.status(404).send({ err: 'No such url' })
})



connectDB()

const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}