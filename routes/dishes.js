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
    const dish = await Dish.findById(productId); 
    console.log(productId);
    console.log(dish._id);

    
    const revs = await Reviews.find({productId : dish._id});
  console.log(revs);
    res.render('productPage', { product: dish ,revs}); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports.router = router;