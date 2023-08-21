const express = require('express');

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

module.exports.router = router;