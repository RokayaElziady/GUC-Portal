const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const app = express();
const locationRoute=require('./api/routers/location.router');
const facultyRoute=require('./api/routers/faculty.router');
const { connectDB } = require('./config/dbConfig');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
connectDB();
app.use(verify)
app.use('/schedule',schedule)
app.use('/request', request)
app.use('/HOD', HOD)
app.use('/courseInstructor', courseInstructor);

// var a=new academicMemberModel({
//   id:"m6",
//   name:"rok",
//   department:"5fd54e9adf4bfa099808bd12",
//   gender:"female"

// })
// a.save()


///.save()



//  a.save()





const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}
