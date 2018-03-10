const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');
const path = require('path');
const port = process.env.PORT || 8000;
app.use(logger('dev'))
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

//route and session objects
require('./config/session.js')(app);
require('./config/routes.js')(app);

//server port
app.listen(port, ()=>{
  console.log('LISTENING ON PORT:',port);
})
