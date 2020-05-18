// 引用Express與Express路由器
const express = require('express')
const router = express.Router()
//引入restaurant model
const Restaurant = require('../../models/restaurant')

//Sort function
router.get('/:sorting/:order', (req, res) => {
  const sorting = req.params.sorting
  const order = req.params.order
  Restaurant.find()
    .lean()
    .sort({ [sorting]: [order] })
    .then(rest => res.render('index', { rest }))
    .catch(error => console.log(error))
})


//匯出模組
module.exports = router
