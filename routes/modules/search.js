// 引用Express與Express路由器
const express = require('express')
const router = express.Router()
//引入restaurant model
const Restaurant = require('../../models/restaurant')

//Search function
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  return Restaurant.find({
    "$or": [
      { "name": { $regex: `${keyword}`, $options: '$i' } },
      { "category": { $regex: `${keyword}`, $options: '$i' } }
    ]
  })
    .lean()
    .then(rest => res.render('index', { rest, keyword }))
})

//匯出模組
module.exports = router