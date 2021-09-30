const express = require('express');
const app = express();


//Sets up express to read incoming date and send POST and PUT requests
app.use(express.urlencoded({ extended: false }))

// Sets up public folder 
app.use('/public',express.static('public'))
// app.use('/public', express.static('public'))



app.set('view engine', 'ejs')


//  Welcome route
app.get('/', (req, res)=>{res.render('index.ejs')})
//  Register route
app.get('/register', (req, res)=>{res.render('register.ejs')})
// Login route
app.get('/login', (req, res)=>{res.render('login.ejs')})
//  Game Room
app.get('/game', (req, res)=>{res.render('game.ejs')})


PORT = 7000||process.env.PORT;
app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)});