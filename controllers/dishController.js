const Dish = require("../models/Dishes");
const restaurantService = require("../services/restaurant");
const reviewService = require("../services/review");

const index = async (req, res) => {
  const dishes = await restaurantService.getAllDishes();
  res.render("../views/dishes", { dishes });
};

const createDish = async (req, res) => {
  const { allergenics, chef, description, name, price, restaurant, tags, type } = req.body;

  const newDish = await restaurantService.createDish(
    allergenics,
    chef,
    description,
    name,
    price,
    restaurant,
    tags,
    type
  );
  res.json(newDish);
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
