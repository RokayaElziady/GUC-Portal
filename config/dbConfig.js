const mongoose = require('mongoose')
<<<<<<< HEAD
const mongoURI = require('./keys_dev').uri;
=======
const { mongoURI } = require('./keys_dev')
>>>>>>> 425477c2628768232a6c4300c20427df737980e6

const connectDB = async () => {
  const uri = mongoURI
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
