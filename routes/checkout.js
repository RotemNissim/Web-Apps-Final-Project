const checkoutController = require('../controllers/checkout');
const express = require('express');
const router = express.Router();


router.get('/', checkoutController.getCheckoutPage);
router.post('/place-order', checkoutController.placeOrder);

module.exports = router;