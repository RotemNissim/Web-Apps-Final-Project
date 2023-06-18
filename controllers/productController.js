const Product = require('../models/product');

exports.createProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = new Product({
    name,
    price,
    // Set other fields as per your requirements
  });

  newProduct.save((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create product' });
    }
    return res.status(201).json({ message: 'Product created successfully' });
  });
};
