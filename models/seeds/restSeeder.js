//載入mongoose
const mongoose = require('mongoose')
//載入restaurant.js
const Restaurant = require('../restaurant')
//setting link to mongoose
mongoose.connect('mongodb://localhost/Restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  for (i = 0; i < 10; i++) {
    Restaurant.create({ name: 'name-' + i, name_en: 'name_en-' + i })
  }
  console.log('done')
})
