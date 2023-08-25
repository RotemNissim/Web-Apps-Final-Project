const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
// router.route('/signup', userController.createUser);
router.post('/signup', userController.createUser);
// router.get('/', userController.getAllUsers); // Use the correct function name here
// router.put('/:userId', userController.updateUser);
// router.delete('/:userId', userController.deleteUser);

module.exports = router;
