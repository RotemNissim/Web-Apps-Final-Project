const checkoutController = require('../controllers/checkout');
const express = require('express');
const router = express.Router();


router.get('/', checkoutController.getCheckoutPage);
router.post('/place-order', checkoutController.createOrder);

module.exports = router;
