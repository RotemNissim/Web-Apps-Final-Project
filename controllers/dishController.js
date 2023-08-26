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
  editDish
};
