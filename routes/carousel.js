// routes/carousel.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Make sure the path is correct

// Fetch products for carousel
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().limit(5); // Fetch top 5 products
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
