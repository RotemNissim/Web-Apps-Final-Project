// routes/shoppingCart.js
const express = require('express');
const router = express.Router();

router.route('/shoppingCart')
  .get((req, res) => {
    // Fetch the items from the cart (if stored in local storage)
    const cartItems = []; // You need to fetch your cart items here

    res.render('shoppingCart', { cartItems });
  });

module.exports = router;
