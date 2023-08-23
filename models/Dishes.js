const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
   Price: {
    type: Number,
    required: true,
    min: 0, // Price cannot be negative
  },
    chef: { 
    type: String,
    required: true,
  },
  ranks: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  },
  tags: {
   type: [String],
   required: true,
  },
  type: {
    type: String,
    required: true,
  },
 imgUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  allergenics: {
    type: [String],
    required: true,
  },
 restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  
});

const Dish = mongoose.model('Dish', dishSchema, "Dishes");

module.exports = Dish;
