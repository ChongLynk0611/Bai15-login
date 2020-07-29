
var express = require("express");
var app = express();
var cookieParser = require('cookie-parser')
var db = require('./db');
var booksRouter = require('./routes/books.router');
var usersRouter = require('./routes/users.router');
var transaction = require('./routes/transaction.router');
var homeRouter = require('./routes/home.router');
// khai bao pug
app.set('view engine', 'pug');
app.set('views', './views');

//khai bao de lay duoc req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser());
app.use('/books', booksRouter);
app.use('/users', usersRouter);
app.use('/transaction', transaction);
app.use('/home', homeRouter);


app.listen(3000 , function(){
    console.log("this is port 3000!!!");
});