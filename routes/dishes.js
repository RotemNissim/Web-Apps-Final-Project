const express = require('express');
const Dish = require('../models/Dishes')

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

router.get('/productPage', async (req, res) => {
    try {
      const productId = req.query.id;
      const dish = await Dish.findById(productId).populate('restaurant'); // Replace with your database query
      res.render('productPage', { product : dish });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports.router = router;