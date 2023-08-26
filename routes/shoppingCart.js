const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  // Render the shoppingCart.ejs view
  
  res.render('../views/shoppingCart.ejs');
});

module.exports = router;