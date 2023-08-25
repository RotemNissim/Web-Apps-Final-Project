const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  cuisine: [String],
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
  name: {
    type: String,
    required: true,
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema, "Restaurants");

module.exports = Restaurant;
