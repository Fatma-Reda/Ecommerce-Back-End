const express = require('express');
const cookieParser = require('cookie-parser')
const logger = require('morgan');
const cors= require('cors');
//const createError = require('http-errors');

require('./db');

const indexRouter = require('./routes/index');
const productsRouter=require('./routes/products');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    (err,req,res,next)=>{
        console.error(err);
        res.status(err.status || 500);
        res.send(err);
    }
);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

module.exports = app;
