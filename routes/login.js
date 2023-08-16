const express = require('express');

const { index, login } = require('../controllers/auth');

const {redirectIfAuthenticated} = require('../middlewares/login');

const router = express.Router();

router.route('/').get(redirectIfAuthenticated, index).post(login);

module.exports = router;