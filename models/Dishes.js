const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  allergenics: {
    type: [String],
    required: true,
  },
  chef: String,
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price cannot be negative
  },
  imgUrl: {
    type: String,
    required: true,
  },
  ranks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  tags: [String],
  type: {
    type: String,
    required: true,
  },
});

const Dish = mongoose.model('Dish', dishSchema, "Dishes");

module.exports = Dish;
