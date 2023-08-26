const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
// router.route('/signup', userController.createUser);
router.post('/signup', userController.createUser);
router.get('/:userId', userController.getUserArea);

module.exports = router;
