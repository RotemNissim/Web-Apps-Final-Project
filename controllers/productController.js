// import Product from '/models/Dishes.js';

// export function createProduct (req, res) {
//   const { name, price, description, allergenics, restaurant } = req.body;
//   const _name = /^[A-Z a-z]{2,30}$/;
//   const _price = /^[0-9]{1,10}$/;
//   const _description = /^[A-Z a-z]{2,200}$/;
//   const _allergenics = /^[A-Z a-z]{2,200}$/;
//   const _restaurant = /^[A-Z a-z 0-9]{2,50}$/;
//   if (!name ||!price ||!description ||!allergenics ||!restaurant) {
//     const err = new Error('All fields are required');
//     alert (err);
//   } else {if (_name.test(name) && _price.test(price) && _description.test(description00) && _allergenics.test(allergenics) && _restaurant.test(restaurant)){
//     const newProduct = new Product();
//       newProduct.name = name;
//       newProduct.price = price;
//       newProduct.description = description;
//       newProduct.allergenics = allergenics;
//       newProduct.restaurant = restaurant;
//     newProduct.save(err, savedProduct);
//   }
// }};

  


//   // Create a new product
//   const newProduct = new Product({
//     name,
//     price,
//     description,
//     allergenics,
//     restaurant,
//   });

//   newProduct.save((err, savedProduct) => {
//     if (err) {
//       return res.status(500).json({ error: 'Failed to create product' });
//     }
//     return res.status(201).json(savedProduct);
//   });

