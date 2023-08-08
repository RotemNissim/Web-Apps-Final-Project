const express = require('express');
const router = express.Router();

// Import route modules
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const supplierRoutes = require('./routes/suppliers');
const carouselRoutes = require('./routes/carousel');

// Use route modules
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/suppliers', supplierRoutes);
app.use('/carousel', carouselRoutes);

module.exports = router;
