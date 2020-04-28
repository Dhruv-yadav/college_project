const express = require('express')
const route= express.Router()

route.get('/',(req,res)=>{
  res.render('feedback',{
    layout:'layout/feedback_header.hbs',
    title:'FEEDBACK'
  })
})


module.exports = route