// routes/carousel.js
const express = require('express');
const router = express.Router();
const   Dish = require('../models/Dishes'); // Make sure the path is correct

// Fetch products for carousel
router.get('/dishes', async (req, res) => {
  try {
    const products = await Product.find().limit(9); // Fetch top 5 products
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
