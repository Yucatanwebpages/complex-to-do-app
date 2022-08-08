'use strict';

const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require(process.env.CONNECTIONSTRING);
const app = require('./app');
app.listen(process.env.PORT);

start();
