const express= require('express');
const app = express();
const bodyParser= require('body-parser');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const mongoose= require('mongoose');

const Signup = require('./models/Signup')
const Reg = require('./models/Reg')
const Client = require('./models/Client')
const Conductor = require('./models/Conductor')
const Driver = require('./models/Driver')
require('dotenv').config(); 
const path=require('path');
const regRoute=require('./controllers/regroute');
const homepageRoute=require('./controllers/homepageroute');
const loginRoute=require('./controllers/loginroute');
const registerRoute=require('./controllers/registerroute');
const clientRoute=require('./controllers/clientroute');
const conductorRoute=require('./controllers/conductorroute');
const driverRoute=require('./controllers/driverroute');

//Setting up db
mongoose.connect(process.env.DBCONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

    //setting up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//setting up middle ware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

//middleware settings
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());

//using imported routes
app.use('/',regRoute);
app.use('/',loginRoute);
app.use('/',registerRoute);
app.use('/',clientRoute);
app.use('/',conductorRoute);
app.use('/',driverRoute);
app.use('/',homepageRoute);

app.post('/logout',(req,res)=>{
  if(req.session){
    req.session.destroy(function (err){
      if (err){
  
      }else {
        return res.redirect('/ho')
      }
    })
  }
  
    
  
  })
  
  
  
  
   
  
  
  
  // Setting up my server
// app.get('/',(req,res) => res.send('Happy Coding'));

app.listen(3001, () => console.log('Listening on port 3001'));
//
