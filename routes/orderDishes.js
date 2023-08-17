const express = require('express');
const {
    index,
    createOrder,
    getOrders,
    getOrdersByDate
} = require('../controllers/orderDishes');

const router = express.Router();

router.route('/').get(index);

router.route('/api/Orders').post(createOrder).get(getOrders);

router.route('/api/OrdersByDate').get(getOrdersByDate);

module.exports = router;