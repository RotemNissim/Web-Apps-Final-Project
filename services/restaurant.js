
const Restaurant = require('../models/Restaurants'); // Adjust the path to your service

// Create Restaurant
const createRestaurant = async (name, address, cuisine) => {
  const rest = new Restaurant({
      name: name,
      address: address,
      cuisine: cuisine,
  });

  return await rest.save();
};

const deleteRestaurant = async (id) => {
  const rest = await getRestaurantById(id);
  if (!rest) {
    return null;
  }
  await rest.remove();
  return rest;
};

const editRestaurant = async (id, name, address, cuisine, dishes) => {
  const rest = await getRestaurantById(id);
  if (!rest) {
    return null;
  }
  rest.name = name;
  rest.address = address;
  rest.cuisine = cuisine;
  rest.dishes = dishes;
  return await rest.save();
};

const getRestaurantById = async (id) => {
  return await Restaurant.findById(id);
};

const getAllRestaurants = async () => {
  return await Restaurant.find({});
};

module.exports = {
  createRestaurant,
  deleteRestaurant,
  editRestaurant,
  getRestaurantById,
  getAllRestaurants
};
