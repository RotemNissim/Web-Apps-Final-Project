const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // Add other fields as per your requirements
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;