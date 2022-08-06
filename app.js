'use strict';

const express = require('express');
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.render('home-guest');
});

app.listen(3000);
