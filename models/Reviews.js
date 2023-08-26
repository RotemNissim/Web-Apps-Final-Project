const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish',
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema, "Reviews");

module.exports = Review;
