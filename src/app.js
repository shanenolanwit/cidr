const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      session = require('express-session'),
      cookieParser = require('cookie-parser'),
      flash = require('connect-flash'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const cidrRoutes = require('./routes/cidr');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(cookieParser('secret')); 
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(myConnection(mysql, {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'cidr'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', cidrRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
