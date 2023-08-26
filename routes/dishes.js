const express = require('express');
const Dish = require('../models/Dishes');
const Reviews = require('../models/Reviews');

const {
    index,
    createDish,
    getDishes,
    getDishesByType,
    getDish,
    editDish,
    deleteDish,
    searchDishes
} = require('../controllers/dishController');

const router = express.Router();
router.route('/').get(index).post(searchDishes);

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
    const dish = await Dish.findById(productId).populate('restaurant'); // Fetch the dish
    const revs = await Reviews.find({ dish: dish._id }).populate('dish').populate('writer'); // Fetch the reviews for the dish
    // Fetch the reviews for the dish
    res.render('productPage', { product: dish, revs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports.router = router;