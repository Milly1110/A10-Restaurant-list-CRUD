// 引用Express與Express路由器
const express = require('express')
const router = express.Router()
//引入restaurant model
const Restaurant = require('../../models/restaurant')
// 定義首頁路由
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(rest => res.render('index', { rest }))
    .catch(error => console.log(error))
})
//匯出模組
module.exports = router
