//載入mongoose by mongoose module
const db = require('../../config/mongoose')
//載入restaurant.js(上一層目錄)
const Restaurant = require('../restaurant')
//依助教指導載入json做為種子資料(當前目錄)
const restList = require('./restaurant.json')
//setting link to mongoose

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < restList.results.length; i++) {
    Restaurant.create(restList.results[i])
  }
  console.log('done')
})
