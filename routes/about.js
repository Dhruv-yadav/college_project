const express = require('express')
const route= express.Router()

route.get('/',(req,res)=>{
  res.render('about',{
    layout:'layout/about_header.hbs',
    title:'ABOUT'
  })
})


module.exports = route