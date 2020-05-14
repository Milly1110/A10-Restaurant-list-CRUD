//include packages and define app server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
//include mongoose
const mongoose = require('mongoose')

//setting link to mongoose
mongoose.connect('mongodb://localhost/Restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoDB error!')
})
db.once('open', () => {
  console.log('mongoDB connected!')
})

//setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})