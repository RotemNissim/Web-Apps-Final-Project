const express = require('express');
const Dish = require('../models/Dishes');

const {
    index,
    createDish,
    getDishes,
    getDishesByType,
    getDish,
    editDish,
    deleteDish
} = require('../controllers/dishController');

const router = express.Router();
router.route('/').get(index);

router.route('/api').post(createDish).get(getDishes);

router
.route('/api/:id')
.get(getDish)
.delete(deleteDish)
.put(editDish);

router.route('/api/type/:type').get(getDishesByType);
router.route('/productPage').get(async (req, res) => {
  try {
    const productId = req.query.id;
    const dish = await Dish.findById(productId); // Use the correct model name and method
    res.render('/productPage', { product: dish }); // Use the correct variable name
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});