//include packages and define app server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
//include mongoose
const mongoose = require('mongoose')
//include Restaurant model
const Restaurant = require('./models/restaurant')
//include method-override
const methodOverride = require('method-override')
//include index.js
const routes = require('./routes')

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

//setting routes for static file
app.use(express.static('public'))

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting method-override
app.use(methodOverride('_method'))

//掛載總路由器
app.use(routes)

//setting routes


//setting routes for create


//Search function
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  return Restaurant.find({
    "$or": [
      { "name": { $regex: `${keyword}`, $options: '$i' } },
      { "category": { $regex: `${keyword}`, $options: '$i' } }
    ]
  }
  )
    .lean()
    .then(rest => res.render('index', { rest, keyword: req.query.keyword }))
})




//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})