const express= require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose= require('mongoose');

const Register = require('./models/Register')
const Reg = require('./models/Reg')

require('dotenv').config(); 
const path=require('path');
const regRoute=require('./controllers/regroute');
const loginRoute=require('./controllers/loginroute');
const registerRoute=require('./controllers/registerroute');

//Setting up db
mongoose.connect(process.env.DATABASE, {
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

//using imported routes
app.use('/reg',regRoute);
app.use('/login',loginRoute);
app.use('/regi',registerRoute);

// Setting up my server
app.get('/',(req,res) => res.send('Happy Coding'));

app.listen(3000, () => console.log('Listening on port 3000'));

//
