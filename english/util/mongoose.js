const mongoose = require('mongoose')
const {mongodbconnect} = require('../config.json')

module.exports = async () => {
    await mongoose.connect(mongodbconnect, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    return mongoose
}