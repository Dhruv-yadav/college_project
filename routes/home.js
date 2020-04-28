const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
  res.render('home',{
    layout:'layout/header_footer',
    title:'HOME'
  })
})

module.exports = route