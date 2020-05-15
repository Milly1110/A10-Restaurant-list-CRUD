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

//setting routes
app.get('/', (req, res) => {
  // res.render('index')
  Restaurant.find()
    .lean()
    .then(rest => res.render('index', { rest }))
    .catch(error => console.log(error))
})

//setting routes for create
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})
//create data in collection
app.post('/restaurants', (req, res) => {
  const name = req.body.name
  const nameEn = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const googleMap = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description
  return Restaurant.create({ name, nameEn, category, image, location, phone, googleMap, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
//setting routes for detail
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(rest => res.render('detail', { rest }))
    .catch(error => console.log(error))
})

//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})