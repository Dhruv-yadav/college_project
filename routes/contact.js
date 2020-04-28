const express = require('express')
const route= express.Router()


route.get('/',(req,res)=>{
  res.render('contact',{
    layout:'layout/contact_header.hbs',
    title:'CONTACT'
  })
})

module.exports = route