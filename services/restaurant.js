const express = require('express');
const restaurantService = require('./restaurantService'); // Adjust the path to your service

const router = express.Router();

// Add a dish to the menu
router.post('/:restaurantId/addDish/:dishId', async (req, res) => {
  try {
    const message = await restaurantService.addDishToMenu(req.params.restaurantId, req.params.dishId);
    res.json({ message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove a dish from the menu
router.delete('/:restaurantId/removeDish/:dishId', async (req, res) => {
  try {
    const message = await restaurantService.removeDishFromMenu(req.params.restaurantId, req.params.dishId);
    res.json({ message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get the menu of the restaurant
router.get('/:restaurantId/menu', async (req, res) => {
  try {
    const menu = await restaurantService.getMenu(req.params.restaurantId);
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
