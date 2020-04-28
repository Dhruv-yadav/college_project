const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
  res.render('quiz')
})
module.exports = route