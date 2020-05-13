//include packages and define app server related variables
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

//setting routes
app.get('/', (req, res) => {
  res.send('This is restaurant page')
})

//starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})