const express = require('express');
const signUpController = require('./controllers/signUp');

const router = express.Router();
router.route('/').get(index);