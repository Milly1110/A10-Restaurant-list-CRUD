//include mongoose
const mongoose = require('mongoose')

//use mongoose.Schema
const Schema = mongoose.Schema

//define data structure
const restaurantSchema = new Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  name_en: {
    type: String,
    required: true
  }
})

//output Schema
module.exports = mongoose.model('Restaurant', restaurantSchema)