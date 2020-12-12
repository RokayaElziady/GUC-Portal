const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')


const app = express()
const { connectDB } = require('./config/dbConfig')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(verify)




connectDB()

const port = 3000
if (process.env.PORT) {
  app.listen(process.env.PORT, () =>
    console.log(`Server up and running on ${process.env.PORT}`)
  )
} else {
  app.listen(port, () => console.log(`Server up and running on ${port}`))
}