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
const requestModel=require('./Models/requests.model')


const app = express()
const { connectDB } = require('./config/dbConfig')
const schedulemodel = require('./Models/schedule.model')
const { requestType } = require('./api/enums')
const locationModel = require('./Models/location.model')

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