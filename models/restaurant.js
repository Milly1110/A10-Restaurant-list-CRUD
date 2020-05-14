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
  },
  category: {
    type: String
  },
  image: {
    type: String
  },
  location: {
    type: String
  },
  phone: {
    type: String
  },
  rating: {
    type: Number
  }
})

//output Schema
module.exports = mongoose.model('Restaurant', restaurantSchema)