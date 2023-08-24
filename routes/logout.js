const express = require('express');
const { logout } = require('../middlewares/logout'); // Import the logout middleware

const router = express.Router();

// router.route('/')
//   .get((req, res) => {
//     // Clear session data here (if applicable)
//     req.session.destroy((err) => {
//       if (err) {
//         console.error('Logout error:', err);
//         return res.status(500).json({ message: 'Logout failed' });
//       }
//       // Redirect to login page or home page
//       res.redirect('/index.html'); // or any appropriate route
//     });
//   });

router.route('/').get((req, res) => {
  logout(req, res); // Call the logout middleware's function
});


module.exports = router;
