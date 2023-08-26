const Dish = require("../models/Dishes");
const dishesService = require("../services/dishes");

const index = async (req, res) => {
  const dishes = await dishesService.getDishes();
  (dishes)
  //const dishes = [{name: 'test', Price: 3}]
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
  (req.body);
  const dish = await dishesService.getDishById(req.body.id);
  res.json(dish);
};

const deleteDish = async (req, res) => {
  const dish = await dishesService.deleteDish(req.body.id);
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
