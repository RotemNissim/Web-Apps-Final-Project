const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  // Render the shoppingCart.ejs view
  const cartData = req.query.cart ? JSON.parse(req.query.cart) : [];
  res.render('../views/shoppingCart.ejs', { cart : cartData });
});

module.exports = router;