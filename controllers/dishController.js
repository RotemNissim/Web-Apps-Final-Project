const Dish = require("../models/Dishes");
const dishesService = require("../services/dishes");

const index = async (req, res) => {
  const dishes = await dishesService.getDishes();
  res.render("../views/dishes", { dishes });
};

const createDish = async (req, res) => {
  const { name, price, description, allergenics, restaurant } = req.body;
  const _name = /^[A-Z a-z]{2,30}$/;
  const _price = /^[0-9]{1,10}$/;
  const _description = /^[A-Z a-z]{2,200}$/;
  const _allergenics = /^[A-Z a-z]{2,200}$/;
  const _restaurant = /^[A-Z a-z 0-9]{2,50}$/;
  if (!name ||!price ||!description ||!allergenics ||!restaurant) {
    const err = new Error('All fields are required');
    alert (err);
  } else {if (_name.test(name) && _price.test(price) && _description.test(description00) && _allergenics.test(allergenics) && _restaurant.test(restaurant)){
    const newDish = new Dish(); //  create new instance of dish model
      newDish.name = name;
      newDish.price = price;
      newDish.description = description;
      newDish.allergenics = allergenics;
      newDish.restaurant = restaurant;
    newDish.save(err, savedDish);
  }
else { if(!_name.test(name)) {
  const err = new Error('Name must be between 2 and 30 characters');
  alert (err);
}

if(!_price.test(price)) {
  const err = new Error('Price must be between 1 and 10 digits');
  alert (err);
}

if(!_description.test(description)) {
  const err = new Error('Description must be between 2 and 200 characters');
  alert (err);
}

if(!_allergenics.test(allergenics)) {
  const err = new Error('Allergenics must be between 2 and 200 characters');
  alert (err);
}

if(!_restaurant.test(restaurant)) {
  const err = new Error('Restaurant must be between 2 and 50 characters');
  alert (err);
}
}
}
};

const getDish = async (req, res) => {
  const dish = await restaurantService.getDishById(req.params.id);
  res.json(dish);
};

const deleteDish = async (req, res) => {
  const dish = await restaurantService.deleteDish(req.params.id);
  res.json(dish);
};

const getDishes = async (req, res) => {
  const dishes = await restaurantService.getDishes(req.query.pageNum);
  res.json(dishes);
};

const getDishesByType = async (req, res) => {
  const dishes = await restaurantService.getDishesByType(req.params.type);
  res.json(dishes);
};

const editDish = async (req, res) => {
  const { allergenics, chef, description, name, price, tags, type } = req.body;
  const dish = await restaurantService.editDish(
    req.params.id,
    allergenics,
    chef,
    description,
    name,
    price,
    tags,
    type
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
  editDish
};
