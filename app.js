//include packages and define app server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
//include mongoose
const mongoose = require('mongoose')

//setting link to mongoose
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoDB error!')
})
db.once('open', () => {
  console.log('mongoDB connected!')
})

//setting routes
app.get('/', (req, res) => {
  res.send('This is restaurant page')
})

//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})