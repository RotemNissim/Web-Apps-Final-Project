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

const getDishes = async (params) => {
  if (params?.limit) {
    return await Dish.find({}).sort({ rating: -1 }).limit(params.limit).populate("restaurant");
  }
  if ((params?.maxPrice >= 0) && (params?.minPrice >= 0)) {
    if(params.searchTerm === '')
      return await Dish.find({ Price: { $gte: Number(params.minPrice), $lte: Number(params.maxPrice) } }).sort({ rating: -1 }).populate("restaurant");
    return await Dish.find({
      Price: { $gte: Number(params.minPrice), $lte: Number(params.maxPrice) },
      $or: [
        { name: { $regex: params.searchTerm, $options: "i" } },
        { description: { $regex: params.searchTerm, $options: "i" } },
        { ingredients: { $regex: params.searchTerm, $options: "i" } },
        { tags: { $regex: params.searchTerm, $options: "i" } },
        { type: { $regex: params.searchTerm, $options: "i" } }
      ]
    }).sort({ rating: -1 }).populate("restaurant");
  }
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
