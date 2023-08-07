const express = require('express');
const router = express.Router();

// Import route modules
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const supplierRoutes = require('./routes/suppliers');

// Use route modules
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/suppliers', supplierRoutes);

module.exports = router;
