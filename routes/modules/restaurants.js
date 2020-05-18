// 引用Express與Express路由器
const express = require('express')
const router = express.Router()
//引入restaurant model
const Restaurant = require('../../models/restaurant')
//設定restaurants路由
//setting routes for create
router.get('/new', (req, res) => {
  return res.render('new')
})
//create data in collection
router.post('/', (req, res) => {
  // const name = req.body.name
  // const nameEn = req.body.name_en
  // const category = req.body.category
  // const image = req.body.image
  // const location = req.body.location
  // const phone = req.body.phone
  // const googleMap = req.body.google_map
  // const rating = req.body.rating
  // const description = req.body.description
  //參考U88教案內容將以上內容修改成解構賦值的語法
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
//setting routes for detail
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(rest => res.render('detail', { rest }))
    .catch(error => console.log(error))
})
//setting routes for edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(rest => res.render('edit', { rest }))
    .catch(error => console.log(error))
})
//update documents in collection
router.put('/:id', (req, res) => {
  const id = req.params.id
  // const name = req.body.name
  // const nameEn = req.body.name_en
  // const category = req.body.category
  // const image = req.body.image
  // const location = req.body.location
  // const phone = req.body.phone
  // const googleMap = req.body.google_map
  // const rating = req.body.rating
  // const description = req.body.description
  //參考U88教案內容將以上內容修改成解構賦值的語法
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.findById(id)
    .then(rest => {
      rest.name = name
      rest.name_en = name_en
      rest.category = category
      rest.image = image
      rest.location = location
      rest.phone = phone
      rest.google_map = google_map
      rest.rating = rating
      rest.description = description

      return rest.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

//setting routes for delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(rest => rest.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//匯出模組
module.exports = router