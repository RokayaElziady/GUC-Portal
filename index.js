const express = require('express')
const bodyParser = require('body-parser')
const {verify}= require('./api/auth/verifyToken')
const app = express()
const locationRoute=require('./api/routers/location.router');
const { connectDB } = require('./config/dbConfig');
const locationRouter = require('./api/routers/location.router');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/locations',locationRouter);

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

