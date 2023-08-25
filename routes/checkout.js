// routes/checkout.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Orders'); // Import the orders model

router.post('/', async (req, res) => {
  const cartData = req.body.cart;
  
  // Calculate the total price based on cart data
  const totalPrice = calculateTotalPrice(cartData);

  try {
    // Create a new order with the calculated total price
    const order = new Order({ totalPrice });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the order.' });
  }
});

function calculateTotalPrice(cartData) {
  let total = 0;
  for (const item of cartData) {
    total += item.price;
  }
  return total;
}

module.exports = router;
