const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dishes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Dish',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    TA: {
        type: Boolean,
        required: true,
    },
    delivery: {
        type: Boolean,
        required: true,
    },
});

const Order = mongoose.model('Order', ordersSchema,"Orders");

module.exports = Order;