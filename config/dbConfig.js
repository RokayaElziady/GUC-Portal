const mongoose = require('mongoose')
const { mongoURI } = require('./keys_dev')

const connectDB = async () => {
  const uri = mongoURI
 // console.log(uri)
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connected…')
    })
    .catch((err) => console.log(err))
}

module.exports = { connectDB }
