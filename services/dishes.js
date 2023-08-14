const mongoose = require('mongoose');
const Dish = require("../models/Dish");

const createDish = async (allergenics, chef, description, name, price, restaurant, tags, type) => {
  const dish = new Dish({
    allergenics: allergenics,
    chef: chef,
    description: description,
    name: name,
    price: price,
    restaurant: restaurant,
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

const updateDish = async (id, allergenics, chef, description, name, price, tags, type) => {
  const dish = await getDishById(id);
  if (!dish) {
    return null;
  }

  dish.allergenics = allergenics;
  dish.chef = chef;
  dish.description = description;
  dish.name = name;
  dish.price = price;
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
