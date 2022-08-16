'use strict';

// Coumnication between files');

const express = require('express');
const router = express.Router();
const userController = require('./controllers/userControler.js');

router.get('/', userController.home);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
