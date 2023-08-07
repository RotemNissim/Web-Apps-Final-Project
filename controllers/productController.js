import Product from '/models/Product.js';

export function createProduct(req, res) {
  const { name, price, description, allergenics, restaurant } = req.body;

  // Validation: Check if required fields are present
  if (!name || !price || !description || !allergenics || !restaurant) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a new product
  const newProduct = new Product({
    name,
    price,
    description,
    allergenics,
    restaurant,
  });

  newProduct.save((err, savedProduct) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create product' });
    }
    return res.status(201).json(savedProduct);
  });
}
