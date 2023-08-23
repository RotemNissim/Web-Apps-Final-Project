const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  cuisine: {
   type: [String],
   required: true,
  },
  dishes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema,"Restaurants");

module.exports = Restaurant;
