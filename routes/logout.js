const express = require('express');
const { index, login } = require('../controllers/login');
const { redirectIfAuthenticated } = require('../middlewares/login');

const router = express.Router();

// Logout route definition
router.get('/logout', (req, res) => {
  // Clear session data here (if applicable)
  // Redirect to login page or home page
  res.redirect('/login'); // Example: Redirect to login page
});

// Index and login routes
router.route('/').get(redirectIfAuthenticated, index).post(login);

module.exports = router;
