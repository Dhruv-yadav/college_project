const express = require('express')
const app = express()
const {db,Users}= require('./db')
const path = require('path')
const session = require('express-session')
const passport = require('./passport')
const hbs = require('express-hbs')
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname+'/public')))

app.use(session({
    secret: 'ajshbkabdakdabdnmasbdkmadahjdbjadm,abdmabdbqhjkd',
    resave: false,
    saveUninitialized: true,
  }))

//this allows strategy use krni hai
app.use(passport.initialize())
//when cookies is used
app.use(passport.session())

app.use('/login',require('./routes/login').route)
app.use('/signup',require('./routes/signup').route)
app.use('/profile',require('./routes/profile').route)
app.use('/home',require('./routes/home'))
app.use('/about',require('./routes/about'))
app.use('/contact',require('./routes/contact'))
app.use('/feedback',require('./routes/feedback'))
app.use('/logout',require('./routes/logout'))
app.use('/quiz',require('./routes/quiz'))

app.get('/',(req,res)=>{
    if(!req.user){
        return res.redirect('/login')
    }
    res.redirect('/home')
})


app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
  }))


db.sync({alter:true})
    .then(()=>{
        app.listen(4444,()=>{
            console.log('http://localhost:4444')
        })
    })