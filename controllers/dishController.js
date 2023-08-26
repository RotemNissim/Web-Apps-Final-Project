const Dish = require("../models/Dishes");
const dishesService = require("../services/dishes");

const index = async (req, res) => {
  const dishes = await dishesService.getDishes();
  console.log(dishes)
  //const dishes = [{name: 'test', price: 3}]
  res.render("../views/dishes", { dishes });
};

const createDish = async (req, res) => {
  const { name, Price, chef, ranks, tags, type, imgUrl, description, allergenics, restaurant } = req.body;
  try {
    const savedDish = await dishesService.createDish(name, Price, chef, ranks, tags, type, imgUrl, description, allergenics, restaurant);
    res.status(201).json(savedDish);
  } catch (error) {
    console.error('Failed to create', error);
    res.status(500).send('Internal Server Error');
  }
 
//   const _name = /^[A-Z a-z]{2,30}$/;
//   const _price = /^[0-9]{1,10}$/;
//   const _description = /^[A-Z a-z]{2,200}$/;
//   const _allergenics = /^[A-Z a-z]{2,200}$/;
//   const _restaurant = /^[A-Z a-z 0-9]{2,50}$/;
//   if (!name ||!price ||!description ||!allergenics ||!restaurant) {
//     const err = new Error('All fields are required');
//     alert (err);
//   } else {if (_name.test(name) && _price.test(price) && _description.test(description00) && _allergenics.test(allergenics) && _restaurant.test(restaurant)){
//     const newDish = new Dish(); //  create new instance of dish model
//       newDish.name = name;
//       newDish.price = price;
//       newDish.description = description;
//       newDish.allergenics = allergenics;
//       newDish.restaurant = restaurant;
//     newDish.save(err, savedDish);
//   }
// else { if(!_name.test(name)) {
//   const err = new Error('Name must be between 2 and 30 characters');
//   alert (err);
// }

// if(!_price.test(price)) {
//   const err = new Error('Price must be between 1 and 10 digits');
//   alert (err);
// }

// if(!_description.test(description)) {
//   const err = new Error('Description must be between 2 and 200 characters');
//   alert (err);
// }

// if(!_allergenics.test(allergenics)) {
//   const err = new Error('Allergenics must be between 2 and 200 characters');
//   alert (err);
// }

// if(!_restaurant.test(restaurant)) {
//   const err = new Error('Restaurant must be between 2 and 50 characters');
//   alert (err);
// }
// }
// }
};

const getDish = async (req, res) => {
  const dish = await dishesService.getDishById(req.params.id);
  res.json(dish);
};

const deleteDish = async (req, res) => {
  const dish = await dishesService.deleteDish(req.params.id);
  res.json(dish);
};

const getDishes = async (req, res) => {
  const dishes = await dishesService.getDishes(req.query || {});
  res.json(dishes);
};


const searchDishes = async (req, res) => {
  let minPrice = req.body.minPrice;
  let maxPrice = req.body.maxPrice;
  let searchTerm = req.body.searchTerm;
  if(minPrice === '')
    minPrice = 0;
  if(maxPrice === '')
  maxPrice = 1000000000;
minPrice = Number(minPrice);
maxPrice = Number(maxPrice);
  if(typeof minPrice !== 'number')
    return;
  if(typeof maxPrice !== 'number')
    return;
  if(minPrice < 0 || maxPrice < 0)
    return;
  if(minPrice > maxPrice)
    return;
  const params = { minPrice, maxPrice, searchTerm };
  const dishes = await dishesService.getDishes(params);
  if(dishes && dishes.length !== 0)
    res.status(200).json(dishes);
  res.status(400).json();
};


const getDishesByType = async (req, res) => {
  const dishes = await dishesService.getDishesByType(req.params.type);
  res.json(dishes);
};

const editDish = async (req, res) => {
  const { name, Price, chef, ranks, tags, type, imgUrl, description, allergenics, restaurant } = req.body;
  const dish = await dishesService.editDish(
    req.params.id,
    name,
    Price,
    chef,
    ranks,
    tags,
    type,
    imgUrl,
    description,
    allergenics, 
    restaurant
  );
  res.json(dish);
};

module.exports = {
  index,
  getDish,
  createDish,
  getDishes,
  getDishesByType,
  deleteDish,
  editDish,
  searchDishes
};
