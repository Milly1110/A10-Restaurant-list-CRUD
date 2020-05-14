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
  name_en: String,
  category: String,
  image: String,
  location: String,
  phone: String,
  google_map: String,
  rating: Number,
  description: String

})

//output Schema
module.exports = mongoose.model('Restaurant', restaurantSchema)