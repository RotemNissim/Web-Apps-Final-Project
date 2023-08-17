const mongoose = require('mongoose');
const Dish = require("../models/Dishes");

const createDish = async (restaurant, name, price, description, allergenics, chef, tags, type) => {
  const dish = new Dish({
    restaurant: restaurant,
    name: name,
    price: price,
    description: description,
    allergenics: allergenics,
    chef: chef,
    tags: tags,
    type: type,
  });

  return await dish.save();
};

const getDishById = async (id) => {
  return await Dish.findById(id).populate("restaurant");
};

const getDishes = async () => {
  return await Dish.find({}).populate("restaurant");
};

const updateDish = async (id, name, price, description, allergenics, chef, tags, type) => {
  const dish = await getDishById(id);
  if (!dish) {
    return null;
  }
  dish.name = name;
  dish.price = price;
  dish.description = description;
  dish.allergenics = allergenics;
  dish.chef = chef;
  dish.tags = tags;
  dish.type = type;

  await dish.save();

  return dish;
};

const deleteDish = async (id) => {
  const dish = await getDishById(id);
  if (!dish) {
    return null;
  }

  await dish.remove();
  return dish;
};

module.exports = {
  createDish,
  getDishById,
  getDishes,
  updateDish,
  deleteDish,
};
