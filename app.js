'use strict';

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const express = require('express');
const app = express();

let sessionOption = session({
  secret: 'JavaScript is so cool',
  store: MongoStore.create({
    client: require('./db'),
  }),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
});

app.use(sessionOption);
app.use(flash());

const router = require('./router.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use('/', router);

module.exports = app;
